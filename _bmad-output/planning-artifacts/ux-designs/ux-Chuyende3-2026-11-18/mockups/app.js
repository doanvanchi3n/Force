/* Prototype V1 (Nâng cấp): Quản lý đăng ký, đối chiếu MSSV, Hàng chờ (Waitlist) và QR Check-in.
   Dữ liệu lưu trong bộ nhớ tab phục vụ kiểm nghiệm giả thuyết UX cho dự án Force. */
(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const app = $('#app');
  const dialog = $('#dialog');

  // Trạng thái vé và sức chứa sự kiện
  const labels = {
    registered: 'Đã đăng ký',
    checked: 'Đã tham dự',
    cancelled: 'Đã hủy',
    waitlist: 'Hàng chờ'
  };
  const CAPACITY = 6; // Sức chứa vé chính thức (fixtures có 4 registered + 2 checked = 6/6; người tiếp theo sẽ vào Hàng chờ)

  const nowFormatted = () => {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  const fixtures = () => [
    { id: 'FORCE-001', name: 'Nguyễn Minh Anh', studentId: '23IT001', email: 'minhanh@example.test', status: 'registered', createdAt: '2026-11-20 14:00', checkInAt: null },
    { id: 'FORCE-002', name: 'Trần Khánh Linh', studentId: '23IT002', email: 'khanhlinh@example.test', status: 'checked', createdAt: '2026-11-20 14:05', checkInAt: '2026-11-26 17:25' },
    { id: 'FORCE-003', name: 'Lê Hoàng Nam', studentId: '23IT003', email: 'hoangnam@example.test', status: 'registered', createdAt: '2026-11-20 14:10', checkInAt: null },
    { id: 'FORCE-004', name: 'Phạm Thu Hà', studentId: '23IT004', email: 'thuha@example.test', status: 'cancelled', createdAt: '2026-11-20 14:15', checkInAt: null },
    { id: 'FORCE-005', name: 'Võ Gia Huy', studentId: '23IT005', email: 'giahuy@example.test', status: 'registered', createdAt: '2026-11-20 14:20', checkInAt: null },
    { id: 'FORCE-006', name: 'Đặng Mai Phương', studentId: '23IT006', email: 'maiphuong@example.test', status: 'checked', createdAt: '2026-11-20 14:25', checkInAt: '2026-11-26 17:28' },
    { id: 'FORCE-007', name: 'Bùi Quang Minh', studentId: '23IT007', email: 'quangminh@example.test', status: 'registered', createdAt: '2026-11-20 14:30', checkInAt: null }
  ];

  const state = {
    people: fixtures(),
    online: true,
    permission: true,
    current: null,
    selected: null,
    search: '',
    filter: 'all',
    checkSearch: '',
    next: 8
  };

  let retryAction = null;
  let dialogReturn = null;
  let confirmAction = null;
  const undoDrafts = new Map();

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').trim().toLowerCase();
  const initials = name => name.trim().split(/\s+/).slice(-2).map(part => Array.from(part)[0]).join('');
  const getPerson = id => state.people.find(person => person.id === id);
  const badge = status => `<span class="badge badge-${status}">${labels[status]}</span>`;

  // Render mã QR trực quan bằng SVG vector ma trận chuẩn (Zero external dependency, hoạt động 100% offline)
  function generateQrSvg(text, size = 160) {
    const n = 21;
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    function drawFinder(r0, c0) {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
            matrix[r0 + r][c0 + c] = 1;
          }
        }
      }
    }
    drawFinder(0, 0);
    drawFinder(0, 14);
    drawFinder(14, 0);
    for (let i = 8; i < 13; i++) {
      matrix[6][i] = i % 2 === 0 ? 1 : 0;
      matrix[i][6] = i % 2 === 0 ? 1 : 0;
    }
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = ((hash << 5) - hash) + text.charCodeAt(i);
      hash |= 0;
    }
    let seed = Math.abs(hash);
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if ((r < 8 && c < 8) || (r < 8 && c >= 13) || (r >= 13 && c < 8)) continue;
        if (r === 6 || c === 6) continue;
        seed = (seed * 9301 + 49297) % 233280;
        matrix[r][c] = (seed / 233280) > 0.5 ? 1 : 0;
      }
    }
    const cell = (size / n).toFixed(2);
    let rects = '';
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (matrix[r][c]) {
          rects += `<rect x="${(c * cell).toFixed(1)}" y="${(r * cell).toFixed(1)}" width="${cell}" height="${cell}" fill="#182B3A"/>`;
        }
      }
    }
    return `<svg class="qr-code-svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mã QR check-in cho ${esc(text)}">${rects}</svg>`;
  }

  const paths = {
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    chevron: '<path d="m9 5 7 7-7 7"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    chart: '<path d="M4 4v16h17M8 15v-4m5 4V7m5 8V5"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    scan: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M3 12h18"/>',
    undo: '<path d="M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12"/>',
    shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>'
  };

  const icon = name => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.info}</svg>`;
  const brand = (target = 'event') => `<a class="brand" href="#${target}" aria-label="Force — ${target === 'event' ? 'Sự kiện' : 'Danh sách tham dự'}"><span class="brand-mark" aria-hidden="true">f</span>force<span style="color:var(--primary)">.</span></a>`;
  const context = () => `<div class="event-context"><div class="date-stamp" aria-hidden="true"><strong>26</strong>TH11</div><div><strong>Workshop: Tự tin thuyết trình</strong><p>26/11/2026 · 17:30–19:00 · Phòng sinh hoạt CLB (Sức chứa: ${CAPACITY} chỗ)</p></div></div>`;
  const notice = (text, kind = '', title = '') => `<div class="notice ${kind ? `notice-${kind}` : ''}">${icon('info')}<div>${title ? `<p><strong>${title}</strong></p>` : ''}<p>${text}</p></div></div>`;
  const operation = () => '<div class="operation-box" id="operation-status"></div>';

  function counts() {
    return {
      total: state.people.length,
      registered: state.people.filter(p => p.status === 'registered').length,
      checked: state.people.filter(p => p.status === 'checked').length,
      cancelled: state.people.filter(p => p.status === 'cancelled').length,
      waitlist: state.people.filter(p => p.status === 'waitlist').length,
      active: state.people.filter(p => p.status === 'registered' || p.status === 'checked').length
    };
  }

  function route() {
    const [path, query = ''] = (location.hash.slice(1) || 'event').split('?');
    const valid = ['event', 'register', 'status', 'lookup', 'attendees', 'check-in', 'report'];
    return { name: valid.includes(path) ? path : 'event', params: new URLSearchParams(query) };
  }

  function nav(target) {
    if (location.hash === `#${target}`) render(true);
    else location.hash = target;
  }

  function announce(message) {
    $('#live').textContent = '';
    window.setTimeout(() => { $('#live').textContent = message; }, 30);
  }

  function notify(message, kind = 'success', retry = false) {
    const box = $('#operation-status');
    if (box) box.innerHTML = notice(`${esc(message)}${retry ? ' <button class="button button-small button-secondary" type="button" data-action="retry" style="margin-top:12px">Thử lại</button>' : ''}`, kind);
    announce(message);
  }

  function blockReason() {
    if (!state.online) return 'Mất kết nối mô phỏng. Thay đổi chưa được ghi nhận. Dữ liệu và nội dung đang nhập vẫn được giữ trong tab này. Bật lại mạng rồi thử lại.';
    if (!state.permission) return 'Bạn chưa có quyền cập nhật trong tình huống này. Dữ liệu chưa thay đổi. Bật lại quyền ở thanh bản thử rồi thử lại.';
    return '';
  }

  function perform(action, inDialog = false) {
    const reason = blockReason();
    if (reason) {
      if (inDialog) {
        $('#dialog-status').textContent = reason + ' Đóng hộp thoại bằng nút Giữ hoặc Escape để đổi tình huống ở thanh bản thử; lý do đã nhập sẽ được giữ khi mở lại.';
        const button = $('#dialog-confirm');
        if (button) button.textContent = 'Thử lại';
      } else {
        retryAction = action;
        notify(reason, 'warning', true);
      }
      return false;
    }
    retryAction = null;
    action();
    return true;
  }

  function studentShell(content, current) {
    return `<header class="app-header"><div class="header-inner">${brand()}<nav class="header-nav" aria-label="Điều hướng sinh viên"><a href="#event" ${current === 'event' ? 'aria-current="page"' : ''}>Sự kiện</a><a href="#lookup" ${['lookup', 'status'].includes(current) ? 'aria-current="page"' : ''}>Tra cứu đăng ký</a></nav></div></header><main id="main" class="page">${content}</main><footer class="footer"><span>Force · Kết nối một sự kiện, rõ từng trạng thái.</span><span>Hỗ trợ tại bàn tổ chức khi cần đối chiếu thông tin.</span></footer>`;
  }

  function organizerShell(content, current) {
    const links = [['attendees', 'users', 'Danh sách'], ['check-in', 'scan', 'Check-in'], ['report', 'chart', 'Báo cáo']];
    return `<div class="workspace"><aside class="sidebar">${brand('attendees')}<div><p class="sidebar-caption">KHÔNG GIAN SỰ KIỆN</p><nav aria-label="Điều hướng ban tổ chức">${links.map(([link, pict, text]) => `<a href="#${link}" ${link === current ? 'aria-current="page"' : ''}>${icon(pict)}${text}</a>`).join('')}</nav></div><div class="sidebar-foot">Một danh sách.<br>Rõ từng lượt tham dự.</div></aside><div class="workspace-body"><header class="workspace-header"><div><div class="event-title">Workshop: Tự tin thuyết trình</div><p>26/11/2026 · 17:30–19:00 · Sức chứa ${CAPACITY} chỗ</p></div><div class="role-label"><span class="avatar" aria-hidden="true">BTC</span>Ban tổ chức</div></header><main id="main" class="workspace-main">${content}</main></div></div>`;
  }

  function eventView() {
    const c = counts();
    const isFull = c.active >= CAPACITY;
    return `<div class="breadcrumb"><span>Sự kiện</span><span aria-hidden="true">/</span><span>Workshop kỹ năng</span></div><div class="event-grid"><section><div class="event-poster"><div class="poster-top"><span>FORCE / WORKSHOP 01</span><span class="poster-tag">Kỹ năng giao tiếp</span></div><h1 tabindex="-1"><small>Workshop</small>Tự tin<br>thuyết trình.</h1><div class="poster-bottom"><div><div class="poster-date">26.11.2026</div><p>17:30–19:00 · Phòng sinh hoạt CLB</p></div><div class="art-voice" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div></div><div class="speech-art" aria-hidden="true"></div></div><div class="event-copy"><h2>Thử nói. Nhận góp ý. Tiến bộ.</h2><p>Cùng luyện cách sắp xếp ý, mở đầu bài nói và trình bày trước nhóm nhỏ. Bạn không cần kinh nghiệm thuyết trình để bắt đầu.</p></div></section><div><section class="panel event-summary" aria-labelledby="event-information"><div class="summary-top"><div class="date-stamp" aria-hidden="true"><strong>26</strong>TH11</div><div><h2 id="event-information" style="font-size:20px">Hẹn gặp bạn tại workshop</h2><p class="muted small">Tối đa ${CAPACITY} chỗ tham gia chính thức</p></div></div><dl class="details"><div class="detail-row">${icon('calendar')}<div><dt>Ngày diễn ra</dt><dd>Thứ Năm, 26 tháng 11, 2026</dd></div></div><div class="detail-row">${icon('clock')}<div><dt>Thời gian</dt><dd>17:30–19:00</dd></div></div><div class="detail-row">${icon('pin')}<div><dt>Địa điểm</dt><dd>Phòng sinh hoạt CLB</dd></div></div><div class="detail-row">${icon('users')}<div><dt>Tình trạng chỗ</dt><dd>${isFull ? `<span style="color:var(--warning)">Đã đủ ${CAPACITY}/${CAPACITY} chỗ chính thức (Mở hàng chờ)</span>` : `Còn ${CAPACITY - c.active}/${CAPACITY} chỗ đăng ký chính thức`} · Miễn phí</dd></div></div></dl><div class="summary-actions"><a href="#register" class="button ${isFull ? 'button-secondary' : 'button-primary'}">${isFull ? 'Đăng ký vào Hàng chờ (Waitlist)' : 'Đăng ký tham gia'} ${icon('arrow')}</a><p>Đã đăng ký? <a href="#lookup">Tra cứu trạng thái vé</a></p></div></section><section class="agenda-section" aria-labelledby="agenda-heading"><h2 id="agenda-heading">Buổi workshop có gì?</h2><ol class="agenda"><li><time>17:30</time><div><strong>Chào nhau và khởi động</strong><span>Làm quen với nhóm thực hành.</span></div></li><li><time>17:45</time><div><strong>Sắp xếp ý, mở đầu bài nói</strong><span>Một cấu trúc dễ áp dụng.</span></div></li><li><time>18:10</time><div><strong>Thực hành theo nhóm nhỏ</strong><span>Mỗi người có thời gian thử nói.</span></div></li><li><time>18:45</time><div><strong>Góp ý và hỏi đáp</strong><span>Kết thúc lúc 19:00.</span></div></li></ol></section></div></div>`;
  }

  function registerView() {
    const c = counts();
    const isFull = c.active >= CAPACITY;
    const capacityNotice = isFull
      ? notice(`Sự kiện hiện đã đạt giới hạn sức chứa chính thức (<strong>${c.active}/${CAPACITY} chỗ</strong>). Khi đăng ký, bạn sẽ được xếp vào <strong>Hàng chờ (Waitlist)</strong>. Nếu có người hủy vé, hệ thống sẽ tự động đôn bạn lên danh sách chính thức!`, 'warning', 'Sức chứa chính thức đã đầy')
      : notice(`Sự kiện còn <strong>${CAPACITY - c.active} / ${CAPACITY} chỗ</strong> đăng ký chính thức. Đăng ký ngay để nhận vé QR tham gia!`, 'success', 'Còn chỗ chính thức');

    return `<div class="narrow"><div class="breadcrumb"><a href="#event">Sự kiện</a><span aria-hidden="true">/</span><span>Đăng ký</span></div><div class="page-heading"><div><p class="eyebrow">ĐĂNG KÝ THAM GIA</p><h1 tabindex="-1">${isFull ? 'Đăng ký vào Hàng chờ' : 'Một chỗ cho bạn.'}</h1><p>${isFull ? 'Đăng ký vào danh sách chờ workshop (nhận vé tự động khi có người hủy).' : 'Điền thông tin để tạo đăng ký cho workshop kỹ năng.'}</p></div></div>${context()}${capacityNotice}${operation()}<section class="panel"><div class="form-heading"><h2>Thông tin sinh viên</h2><p>Các trường đều bắt buộc để đối chiếu và tránh đăng ký trùng lặp.</p></div><form id="registration-form" novalidate><div id="registration-errors"></div><div class="field"><label for="full-name">Họ và tên</label><input class="input" id="full-name" name="name" autocomplete="name" maxlength="80" aria-describedby="name-hint name-error" placeholder="Ví dụ: Nguyễn Thu Lan"><span class="field-hint" id="name-hint">Tên dùng khi đối chiếu tại bàn đón tiếp.</span><p class="field-error" id="name-error"></p></div><div class="field"><label for="student-id">Mã số sinh viên (MSSV)</label><input class="input mono" id="student-id" name="studentId" maxlength="20" aria-describedby="student-id-hint student-id-error" placeholder="Ví dụ: 23IT008"><span class="field-hint" id="student-id-hint">Dùng để định danh và bảo đảm quyền lợi sinh viên.</span><p class="field-error" id="student-id-error"></p></div><div class="field"><label for="email">Email sinh viên / cá nhân</label><input class="input" id="email" name="email" type="email" autocomplete="email" maxlength="254" aria-describedby="email-hint email-error" placeholder="Ví dụ: thulan@example.test"><span class="field-hint" id="email-hint">Dùng để nhận vé và đối chiếu trạng thái.</span><p class="field-error" id="email-error"></p></div><button type="submit" class="button ${isFull ? 'button-secondary' : 'button-primary'} button-full">${isFull ? 'Xác nhận vào Hàng chờ (Waitlist)' : 'Xác nhận đăng ký vé'} ${icon('arrow')}</button><a class="button button-quiet button-full" href="#event" style="margin-top:8px">Quay lại thông tin sự kiện</a></form></section></div>`;
  }

  function statusView() {
    const person = getPerson(state.current);
    if (!person) return `<div class="narrow"><div class="page-heading"><h1 tabindex="-1">Tìm đăng ký của bạn</h1></div>${context()}<section class="panel empty-state">${icon('search')}<h2>Chưa có đăng ký được chọn</h2><p>Nhập mã đăng ký hoặc MSSV để xem đúng trạng thái của bạn.</p><a href="#lookup" class="button button-primary">Tra cứu đăng ký</a></section></div>`;
    
    const checked = person.status === 'checked';
    const cancelled = person.status === 'cancelled';
    const waitlist = person.status === 'waitlist';
    
    let heading = 'Đăng ký của bạn đã được ghi nhận.';
    if (checked) heading = 'Bạn đã tham dự sự kiện.';
    else if (cancelled) heading = 'Đăng ký đã được hủy.';
    else if (waitlist) heading = 'Bạn đang trong Hàng chờ (Waitlist).';

    let subtext = 'Giữ lại mã và mã QR bên dưới để đối chiếu tại bàn check-in sự kiện.';
    if (checked) subtext = 'Trạng thái tham dự của bạn đã được ghi nhận vào danh sách chính thức.';
    else if (cancelled) subtext = 'Bạn không còn trong danh sách tham dự và vị trí đã được giải phóng.';
    else if (waitlist) subtext = 'Sự kiện đã đủ chỗ. Hệ thống sẽ tự động cấp vé và hiển thị mã QR khi có người hủy đăng ký.';

    return `<div class="narrow"><div class="breadcrumb"><a href="#event">Sự kiện</a><span aria-hidden="true">/</span><span>Vé của bạn</span></div>${operation()}<section class="panel status-card"><div class="status-symbol"${cancelled ? ' style="background:var(--danger-soft);color:var(--danger)"' : waitlist ? ' style="background:var(--warning-soft);color:var(--warning)"' : ''}>${icon(cancelled ? 'close' : waitlist ? 'clock' : 'check')}</div><h1 tabindex="-1">${heading}</h1><p>${subtext}</p><div class="ticket"><div class="ticket-head"><div><span class="info-label">Mã đăng ký</span><div class="ticket-code mono">${person.id}</div></div>${badge(person.status)}</div><div class="ticket-body"><div><span class="info-label">Người tham gia</span><strong>${esc(person.name)}</strong><p class="small mono" style="margin:4px 0 2px;font-weight:650">MSSV: ${esc(person.studentId || 'Chưa cập nhật')}</p><p class="small muted">${esc(person.email)}</p></div><div><span class="info-label">Sự kiện</span><strong>Workshop: Tự tin thuyết trình</strong><p class="small muted">26/11/2026 · 17:30–19:00<br>Phòng sinh hoạt CLB</p></div></div>${(person.status === 'registered' || person.status === 'checked') ? `<div class="qr-container"><div class="qr-box">${generateQrSvg(`${person.id}|${person.studentId || ''}|${person.email}`)}</div><p class="qr-label">Xuất trình mã QR này hoặc đọc MSSV tại bàn đón tiếp để check-in</p></div>` : ''}<div class="ticket-footer">${waitlist ? 'Bạn sẽ được thông báo ngay khi có chỗ trống được giải phóng.' : 'Khi đến, cung cấp mã QR hoặc MSSV để ban tổ chức check-in.'}</div></div><ol class="timeline" aria-label="Tiến trình đăng ký"><li><span class="timeline-dot" aria-hidden="true"></span>Đã gửi thông tin đăng ký (${person.createdAt || 'Hôm nay'})</li><li class="${person.status === 'registered' ? 'pending' : ''}"><span class="timeline-dot" aria-hidden="true"${cancelled ? ' style="background:var(--danger)"' : waitlist ? ' style="background:var(--warning)"' : ''}></span>${checked ? `Đã ghi nhận tham dự (${person.checkInAt || ''})` : cancelled ? 'Đã hủy vé' : waitlist ? 'Đang xếp trong hàng chờ' : 'Chờ check-in tại sự kiện'}</li></ol>${checked ? notice('Nếu có ghi nhận nhầm, hãy liên hệ ban tổ chức để đối chiếu. Đăng ký đã tham dự không thể tự hủy.') : ''}${waitlist ? notice('Nếu không còn nhu cầu tham gia, bạn có thể hủy để nhường lượt ưu tiên cho sinh viên tiếp theo.', 'warning') : ''}<div class="status-actions"><a href="#event" class="button button-secondary">Xem thông tin sự kiện</a>${(person.status === 'registered' || person.status === 'waitlist') ? '<button class="button button-danger-outline" type="button" data-action="cancel">Hủy đăng ký</button>' : '<a href="#lookup" class="button button-quiet">Tra cứu mã khác</a>'}</div></section></div>`;
  }

  function lookupView() {
    return `<div class="narrow"><div class="breadcrumb"><a href="#event">Sự kiện</a><span aria-hidden="true">/</span><span>Tra cứu</span></div><div class="page-heading"><div><p class="eyebrow">ĐĂNG KÝ CỦA BẠN</p><h1 tabindex="-1">Tìm lại, thật dễ.</h1><p>Xem trạng thái vé, mã QR và thông tin cần thiết trước khi đến.</p></div></div>${context()}${operation()}<section class="panel"><form id="lookup-form" novalidate><div id="lookup-errors"></div><div class="field"><label for="lookup-code">Mã đăng ký hoặc MSSV</label><input class="input mono" id="lookup-code" name="code" autocomplete="off" spellcheck="false" placeholder="Ví dụ: FORCE-001 hoặc 23IT001" aria-describedby="lookup-hint lookup-error"><span class="field-hint" id="lookup-hint">Nhập mã vé FORCE-XXX hoặc MSSV đã đăng ký.</span><p class="field-error" id="lookup-error"></p></div><button type="submit" class="button button-primary button-full">Tra cứu vé ${icon('arrow')}</button></form><p class="lookup-help">Không tìm thấy mã? Bạn có thể liên hệ trực tiếp bàn đón tiếp để được đối chiếu bằng MSSV hoặc Họ tên.</p></section></div>`;
  }

  function statsView() {
    const c = counts();
    return `<div class="stats" aria-label="Tổng hợp trạng thái"><div class="stat stat-featured"><div class="stat-top"><span>Tổng bản ghi</span>${icon('users')}</div><strong>${c.total}</strong><p class="stat-note">Sức chứa chính thức: ${CAPACITY}</p></div><div class="stat"><div class="stat-top"><span>Đã đăng ký</span>${icon('clock')}</div><strong>${c.registered}</strong><p class="stat-note">Chờ check-in</p></div><div class="stat stat-success"><div class="stat-top"><span>Đã tham dự</span>${icon('check')}</div><strong>${c.checked}</strong><p class="stat-note">Đã quét QR/check-in</p></div><div class="stat" style="border-top:3px solid var(--warning)"><div class="stat-top"><span>Hàng chờ</span>${icon('clock')}</div><strong>${c.waitlist}</strong><p class="stat-note">Chờ giải phóng chỗ</p></div></div>`;
  }

  function filteredPeople() {
    const term = normalize(state.search);
    return state.people.filter(p => (state.filter === 'all' || p.status === state.filter) && (!term || normalize(`${p.name} ${p.studentId || ''} ${p.email} ${p.id}`).includes(term)));
  }

  const participantCell = person => `<div class="person-cell"><span class="avatar" aria-hidden="true">${esc(initials(person.name))}</span><div><div class="person-name">${esc(person.name)}</div><div class="person-email mono">${esc(person.studentId || 'Chưa có MSSV')} · ${esc(person.email)}</div></div></div>`;

  function listContent() {
    if (!state.people.length) return `<div class="empty-state"><h2>Chưa có đăng ký</h2><p>Danh sách sẽ hiển thị khi có người đăng ký sự kiện.</p><a class="button button-secondary" href="#event">Xem thông tin sự kiện</a></div>`;
    const people = filteredPeople();
    if (!people.length) return `<div class="empty-state">${icon('search')}<h2>Chưa tìm thấy người phù hợp</h2><p>Thử tên, MSSV, email hoặc mã khác; bạn cũng có thể bỏ bộ lọc trạng thái.</p><button class="button button-secondary" type="button" data-action="clear-filters">Xóa bộ lọc</button></div>`;
    return `<div class="table-wrap"><table class="participant-table"><caption class="sr-only">Danh sách người đăng ký sự kiện</caption><thead><tr><th scope="col">Người tham gia</th><th scope="col">MSSV</th><th scope="col">Mã vé</th><th scope="col">Trạng thái</th><th scope="col"><span class="sr-only">Thao tác</span></th></tr></thead><tbody>${people.map(p => `<tr><td>${participantCell(p)}</td><td class="table-code mono"><strong>${esc(p.studentId || '—')}</strong></td><td class="table-code mono">${p.id}</td><td>${badge(p.status)}</td><td><a class="button button-quiet button-small" href="#check-in?id=${p.id}" aria-label="Xem ${p.id} — ${esc(p.name)}">Xem ${icon('chevron')}</a></td></tr>`).join('')}</tbody></table></div><div class="mobile-people">${people.map(p => `<article class="mobile-person"><div class="mobile-person-top">${participantCell(p)}</div><div class="mobile-person-bottom"><div><span class="mono">MSSV: ${esc(p.studentId || '—')}</span> · ${badge(p.status)}</div><a href="#check-in?id=${p.id}" class="button button-quiet button-small" aria-label="Xem ${p.id} — ${esc(p.name)}">${p.id} ${icon('chevron')}</a></div></article>`).join('')}</div><div class="table-footer"><span>Hiển thị ${people.length} / ${state.people.length} bản ghi</span><span>Trạng thái cập nhật theo thao tác trong phiên thử.</span></div>`;
  }

  function attendeesView() {
    return `<div class="page-heading"><div><p class="eyebrow">QUẢN LÝ THAM DỰ</p><h1 tabindex="-1">Danh sách rõ. Đón tiếp nhanh.</h1><p>Tra cứu theo MSSV, tên hoặc mã để đối chiếu trước khi check-in.</p></div><a class="button button-primary" href="#check-in">${icon('scan')} Mở bàn check-in</a></div>${operation()}${statsView()}<section class="list-panel" aria-label="Danh sách tham dự"><form class="filter-bar" id="attendee-filters" role="search"><div class="search-field"><label for="attendee-search">Tìm người tham gia</label><input class="input" id="attendee-search" type="search" value="${esc(state.search)}" placeholder="Tên, MSSV, email hoặc mã đăng ký" autocomplete="off"></div><div class="filter-select"><label for="attendee-status">Trạng thái</label><select class="input" id="attendee-status"><option value="all">Tất cả trạng thái</option>${Object.entries(labels).map(([key, value]) => `<option value="${key}" ${state.filter === key ? 'selected' : ''}>${value}</option>`).join('')}</select></div><button type="button" class="button button-secondary" data-action="clear-filters">Xóa lọc</button></form><div id="list-content">${listContent()}</div></section>`;
  }

  function checkResults() {
    if (!state.people.length) return `<div class="empty-state"><h2>Chưa có đăng ký để check-in</h2><p>Chưa ghi nhận ai tham gia. Kiểm tra danh sách hoặc nhờ người phụ trách đối chiếu.</p><a class="button button-secondary" href="#attendees">Xem danh sách</a></div>`;
    const term = normalize(state.checkSearch);
    const people = state.people.filter(p => !term || normalize(`${p.name} ${p.studentId || ''} ${p.email} ${p.id}`).includes(term));
    if (!people.length) return `<div class="empty-state">${icon('search')}<h2>Không tìm thấy đăng ký</h2><p>Kiểm tra lại mã vé, MSSV hoặc tên. Nếu vẫn không có, đối chiếu danh sách tổng.</p><button class="button button-secondary" type="button" data-action="clear-check-search">Tìm lại</button></div>`;
    return `<p class="results-label">${people.length} kết quả · Chọn người để đối chiếu</p>${people.map(p => `<button type="button" class="person-result ${state.selected === p.id ? 'selected' : ''}" data-action="select-person" data-id="${p.id}" aria-pressed="${state.selected === p.id}"><span class="result-copy"><strong>${esc(p.name)}</strong><small class="mono">${p.id} · MSSV: ${esc(p.studentId || '—')}</small></span>${badge(p.status)}</button>`).join('')}`;
  }

  function checkDetail() {
    const person = getPerson(state.selected);
    if (!person) return `<section class="panel check-detail check-placeholder"><div class="empty-state">${icon('shield')}<h2>Đúng người, đúng trạng thái.</h2><p>Quét mã QR hoặc chọn một người bên danh sách để đối chiếu MSSV và tên trước khi xác nhận.</p></div></section>`;
    
    const registered = person.status === 'registered';
    const checked = person.status === 'checked';
    const waitlist = person.status === 'waitlist';
    const cancelled = person.status === 'cancelled';

    let noticeMarkup = '';
    if (registered) noticeMarkup = notice('Đối chiếu MSSV và tên với người đang có mặt trước khi xác nhận check-in.');
    else if (checked) noticeMarkup = notice(`Người này đã được ghi nhận check-in lúc ${person.checkInAt || 'trước đó'}. Check-in lại sẽ không tăng số lượng.`, 'success', 'Đã check-in');
    else if (waitlist) noticeMarkup = notice('Sinh viên này đang ở Hàng chờ (Waitlist), chưa có vé chính thức. Cần có người hủy vé để được chuyển sang danh sách chính thức.', 'warning', 'Chưa có vé chính thức');
    else if (cancelled) noticeMarkup = notice('Đăng ký này đã bị hủy, không thể check-in. Đối chiếu với người phụ trách nếu có thay đổi.', 'danger', 'Đăng ký đã hủy');

    return `<section class="panel check-detail" aria-labelledby="check-person-title"><p class="eyebrow muted">ĐỐI CHIẾU ĐĂNG KÝ & CHECK-IN</p><div class="person-heading"><span class="avatar" aria-hidden="true">${esc(initials(person.name))}</span><div><h2 id="check-person-title" tabindex="-1">${esc(person.name)}</h2><p class="mono" style="margin:2px 0;font-weight:650">MSSV: ${esc(person.studentId || 'Chưa cập nhật')}</p><p class="muted small">${esc(person.email)}</p></div></div><div class="check-info"><div><span class="info-label">Mã đăng ký</span><strong class="mono">${person.id}</strong></div><div><span class="info-label">Trạng thái hiện tại</span>${badge(person.status)}</div></div>${noticeMarkup}<button type="button" class="button ${registered ? 'button-primary' : 'button-secondary'}" data-action="check-in" data-id="${person.id}" ${registered ? '' : 'disabled'}>${icon(registered ? 'check' : checked ? 'check' : 'close')}${registered ? 'Xác nhận check-in' : checked ? 'Đã ghi nhận tham dự' : waitlist ? 'Đang ở hàng chờ' : 'Không thể check-in'}</button>${checked ? `<button type="button" class="button button-quiet" data-action="undo-check-in" data-id="${person.id}" style="margin-top:8px">${icon('undo')} Hoàn tác ghi nhận nhầm</button>` : ''}<details class="help-disclosure"><summary>Thiếu mã QR, đi thay hoặc sai lệch thông tin?</summary><p>Tìm kiếm bằng MSSV hoặc Họ tên để đối chiếu. Nếu là người đi thay chưa đăng ký, hướng dẫn đăng ký mới hoặc đối chiếu với Ban chủ nhiệm CLB.</p></details></section>`;
  }

  function checkView() {
    return `<div class="page-heading"><div><p class="eyebrow">BÀN ĐÓN TIẾP</p><h1 tabindex="-1">Chào bạn. Mình check-in nhé.</h1><p>Quét mã QR hoặc tìm theo MSSV/Tên để ghi nhận tham dự nhanh chóng.</p></div><a href="#attendees" class="button button-secondary">${icon('users')} Xem danh sách</a></div>${operation()}<div class="check-grid"><section class="panel check-search" aria-labelledby="check-search-heading"><h2 id="check-search-heading">Tìm người tham gia</h2><form id="check-form" role="search"><div class="field"><label for="check-query">MSSV, Tên, Email hoặc Mã QR</label><input class="input" id="check-query" type="search" autocomplete="off" value="${esc(state.checkSearch)}" placeholder="Ví dụ: 23IT001 hoặc FORCE-001" aria-describedby="check-hint"><span class="field-hint" id="check-hint">Tìm nhanh bằng MSSV hoặc mã vé in trên QR.</span></div><div class="action-row"><button class="button button-primary" type="submit">${icon('search')} Tìm kiếm</button><button class="button button-secondary" type="button" data-action="simulate-scan">${icon('scan')} Quét mã QR mẫu</button></div></form><div class="search-results" id="check-results">${checkResults()}</div></section><div id="check-detail">${checkDetail()}</div></div>`;
  }

  function csvCell(value) {
    let text = String(value);
    if (/^\s*[=+@-]/.test(text) || /^[\t\r\n]/.test(text)) text = `'${text}`;
    return `"${text.replace(/"/g, '""')}"`;
  }

  function csvText() {
    const headers = ['Mã đăng ký', 'Họ và tên', 'MSSV', 'Email', 'Trạng thái', 'Thời điểm đăng ký', 'Thời điểm check-in'];
    const rows = state.people.map(p => [
      p.id,
      p.name,
      p.studentId || '',
      p.email,
      labels[p.status],
      p.createdAt || '',
      p.checkInAt || ''
    ]);
    return [headers, ...rows].map(row => row.map(csvCell).join(',')).join('\r\n');
  }

  function reportView() {
    const c = counts();
    const valid = c.registered + c.checked;
    const percent = valid ? Math.round(c.checked / valid * 100) : 0;
    return `<div class="page-heading"><div><p class="eyebrow">ĐỐI CHIẾU SAU SỰ KIỆN</p><h1 tabindex="-1">Nhìn lại bằng dữ liệu.</h1><p>Tổng hợp danh sách đăng ký, check-in và hàng chờ phục vụ báo cáo.</p></div><button type="button" class="button button-primary" data-action="download-csv">${icon('download')} Tải danh sách CSV (Đầy đủ MSSV)</button></div>${operation()}${!c.total ? notice('Chưa có dữ liệu để tổng hợp. Danh sách CSV hiện chỉ có tên cột.', '', 'Chưa có đăng ký') : ''}${statsView()}<div class="report-grid"><section class="panel"><h2>Tham dự trên đăng ký chính thức</h2><p class="muted small">Không tính đăng ký đã hủy hoặc hàng chờ vào mẫu số.</p><div class="progress-label"><strong>${c.checked} / ${valid} người</strong><span>${percent}%</span></div><div class="progress-track" role="img" aria-label="${c.checked} người đã tham dự trên ${valid} đăng ký còn hiệu lực, ${percent} phần trăm"><div class="progress-fill" style="width:${percent}%"></div></div><p class="report-note">Tỷ lệ tham dự thực tế dựa trên số vé chính thức đã phát.</p></section><section class="panel"><h2>Kiểm tra số liệu</h2><dl class="report-definitions"><div><dt>Tổng bản ghi</dt><dd>${c.total}</dd></div><div><dt>Vé chính thức (Chờ + Đã đến)</dt><dd>${c.registered} + ${c.checked} = ${valid}</dd></div><div><dt>Hàng chờ (Waitlist)</dt><dd>${c.waitlist}</dd></div><div><dt>Đã hủy</dt><dd>${c.cancelled}</dd></div></dl></section></div><section class="list-panel"><div class="report-preview-title"><div><h2>Xem trước nội dung CSV</h2><p>${c.total} bản ghi · Bao gồm cột MSSV và Thời điểm · UTF-8</p></div><a class="button button-secondary button-small" href="#attendees">Đối chiếu danh sách ${icon('arrow')}</a></div><pre class="csv-preview" tabindex="0" aria-label="Nội dung CSV sẽ tải">${esc(csvText())}</pre></section>`;
  }

  function render(focusHeading = false) {
    const current = route();
    const organizer = ['attendees', 'check-in', 'report'].includes(current.name);
    if (current.name === 'check-in' && current.params.has('id')) state.selected = getPerson(current.params.get('id'))?.id || null;
    const views = { event: eventView, register: registerView, status: statusView, lookup: lookupView, attendees: attendeesView, 'check-in': checkView, report: reportView };
    app.innerHTML = organizer ? organizerShell(views[current.name](), current.name) : studentShell(views[current.name](), current.name);
    $('#demo-role').value = organizer ? 'organizer' : 'student';
    retryAction = null;
    document.title = `${({ event: 'Workshop: Tự tin thuyết trình', register: 'Đăng ký', status: 'Vé của bạn', lookup: 'Tra cứu đăng ký', attendees: 'Danh sách tham dự', 'check-in': 'Bàn check-in', report: 'Báo cáo tham dự' })[current.name]} — Force · Bản thử`;
    if (focusHeading) {
      $('h1', app)?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function errorSummary(containerId, errors) {
    const container = $(`#${containerId}`);
    container.innerHTML = `<div class="error-summary" tabindex="-1" aria-labelledby="error-heading"><p id="error-heading">Kiểm tra lại thông tin</p><ul>${errors.map(([id, message]) => `<li>${message}</li>`).join('')}</ul></div>`;
    $('.error-summary', container).focus();
  }

  function registrationSubmit() {
    const nameField = $('#full-name');
    const studentIdField = $('#student-id');
    const emailField = $('#email');

    const name = nameField.value.trim().replace(/\s+/g, ' ');
    const studentId = studentIdField.value.trim().toUpperCase();
    const email = emailField.value.trim().toLowerCase();

    nameField.value = name;
    studentIdField.value = studentId;
    emailField.value = email;

    const errors = [];
    $('#registration-errors').innerHTML = '';
    ['name-error', 'student-id-error', 'email-error'].forEach(id => { $(`#${id}`).innerHTML = ''; });
    [nameField, studentIdField, emailField].forEach(field => field.removeAttribute('aria-invalid'));

    if (name.length < 2 || name.length > 80) {
      const message = 'Nhập họ và tên sinh viên từ 2 đến 80 ký tự.';
      errors.push(['full-name', message]);
      $('#name-error').textContent = message;
      nameField.setAttribute('aria-invalid', 'true');
    }

    if (!studentId || !/^[A-Z0-9]{3,20}$/.test(studentId)) {
      const message = 'Nhập MSSV hợp lệ (từ 3 đến 20 ký tự chữ và số, ví dụ: 23IT008).';
      errors.push(['student-id', message]);
      $('#student-id-error').textContent = message;
      studentIdField.setAttribute('aria-invalid', 'true');
    }

    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const message = 'Nhập email hợp lệ, ví dụ: thulan@example.test.';
      errors.push(['email', message]);
      $('#email-error').textContent = message;
      emailField.setAttribute('aria-invalid', 'true');
    }

    if (errors.length) { errorSummary('registration-errors', errors); return; }

    const save = () => {
      // Kiểm tra trùng theo MSSV hoặc Email
      const dupStudentId = state.people.find(p => p.studentId && p.studentId.trim().toUpperCase() === studentId && p.status !== 'cancelled');
      const dupEmail = state.people.find(p => p.email.trim().toLowerCase() === email && p.status !== 'cancelled');

      if (dupStudentId || dupEmail) {
        const dupPerson = dupStudentId || dupEmail;
        const dupType = dupStudentId ? `MSSV ${studentId}` : `Email ${email}`;
        const errorHtml = `<span>${dupType} đã có vé đăng ký (Mã: <strong>${dupPerson.id}</strong>). </span><button type="button" class="button button-small button-secondary" data-action="goto-ticket" data-id="${dupPerson.id}" style="margin-top:6px;display:inline-flex">Xem lại vé của bạn (${dupPerson.id}) →</button>`;
        
        if (dupStudentId) {
          $('#student-id-error').innerHTML = errorHtml;
          studentIdField.setAttribute('aria-invalid', 'true');
        } else {
          $('#email-error').innerHTML = errorHtml;
          emailField.setAttribute('aria-invalid', 'true');
        }
        errorSummary('registration-errors', [[dupStudentId ? 'student-id' : 'email', errorHtml]]);
        return;
      }

      // Kiểm tra sức chứa: nếu đủ chỗ chính thức thì đưa vào Hàng chờ (Waitlist)
      const c = counts();
      const isWaitlist = c.active >= CAPACITY;
      const assignedStatus = isWaitlist ? 'waitlist' : 'registered';

      const person = {
        id: `FORCE-${String(state.next++).padStart(3, '0')}`,
        name,
        studentId,
        email,
        status: assignedStatus,
        createdAt: nowFormatted(),
        checkInAt: null
      };

      state.people.push(person);
      state.current = person.id;
      nav('status');
      announce(isWaitlist ? `Đã ghi nhận bạn vào Hàng chờ (Waitlist) với mã ${person.id}.` : `Đã ghi nhận đăng ký thành công với mã ${person.id}.`);
    };

    if (blockReason()) { retryAction = registrationSubmit; notify(blockReason(), 'warning', true); return; }
    perform(save);
  }

  function lookupSubmit() {
    const field = $('#lookup-code');
    const query = field.value.trim().toUpperCase();
    field.value = query;
    $('#lookup-errors').innerHTML = '';
    $('#lookup-error').textContent = '';
    field.removeAttribute('aria-invalid');

    // Hỗ trợ tra cứu bằng cả Mã vé (FORCE-XXX) hoặc MSSV
    const person = state.people.find(p => p.id.toUpperCase() === query || (p.studentId && p.studentId.toUpperCase() === query));

    if (!person) {
      const message = query ? 'Không tìm thấy vé tương ứng với mã hoặc MSSV này. Kiểm tra lại thông tin.' : 'Nhập mã đăng ký hoặc MSSV để tra cứu.';
      field.setAttribute('aria-invalid', 'true');
      $('#lookup-error').textContent = message;
      errorSummary('lookup-errors', [['lookup-code', message]]);
      return;
    }
    state.current = person.id;
    nav('status');
  }

  function closeDialog() {
    dialog.close();
    confirmAction = null;
  }

  function openDialog(html, action = null) {
    dialogReturn = document.activeElement;
    $('#dialog-content').innerHTML = html;
    confirmAction = action;
    dialog.showModal();
  }

  function cancelRegistration() {
    const person = getPerson(state.current);
    if (!person || (person.status !== 'registered' && person.status !== 'waitlist')) {
      notify('Chỉ đăng ký chưa tham dự mới có thể hủy.', 'warning');
      return;
    }
    const isWait = person.status === 'waitlist';
    openDialog(`<h2 id="dialog-title">${isWait ? 'Rút khỏi hàng chờ?' : 'Hủy đăng ký workshop?'}</h2><p>Đăng ký của <strong>${esc(person.name)}</strong> (MSSV: ${esc(person.studentId || person.id)}) sẽ chuyển sang “Đã hủy”.</p>${!isWait ? '<p>Vị trí của bạn sẽ được tự động chuyển cho sinh viên đang trong Hàng chờ (nếu có).</p>' : ''}<p id="dialog-status" class="dialog-status" role="status" aria-live="polite"></p><div class="action-row"><button type="button" class="button button-secondary" data-dialog-close autofocus>Giữ đăng ký</button><button type="button" class="button button-danger" id="dialog-confirm">Xác nhận hủy</button></div>`, () => perform(() => {
      const latest = getPerson(person.id);
      if (latest.status !== 'registered' && latest.status !== 'waitlist') {
        $('#dialog-status').textContent = 'Trạng thái đã thay đổi. Không thể hủy.';
        return;
      }
      const wasRegistered = latest.status === 'registered';
      latest.status = 'cancelled';

      // Cơ chế tự động đôn người từ Waitlist lên Registered khi có vé trống
      let promotionMsg = '';
      if (wasRegistered) {
        const waiter = state.people.find(p => p.status === 'waitlist');
        if (waiter) {
          waiter.status = 'registered';
          promotionMsg = ` Vị trí trống vừa được tự động chuyển cho bạn ${waiter.name} (MSSV: ${waiter.studentId}) từ Hàng chờ!`;
        }
      }

      closeDialog();
      render(true);
      notify(`Đã hủy đăng ký thành công.${promotionMsg}`);
    }, true));
  }

  function checkIn(id) {
    perform(() => {
      const person = getPerson(id);
      if (!person) { notify('Không tìm thấy đăng ký để ghi nhận.', 'warning'); return; }
      if (person.status === 'checked') { notify('Người này đã tham dự. Tổng số không thay đổi.', 'warning'); return; }
      if (person.status === 'cancelled') { notify('Đăng ký này đã bị hủy, không thể check-in.', 'warning'); return; }
      if (person.status === 'waitlist') { notify('Sinh viên đang ở Hàng chờ (Waitlist), chưa được cấp vé chính thức.', 'warning'); return; }
      
      person.status = 'checked';
      person.checkInAt = nowFormatted();
      state.selected = id;
      render();
      $('#check-person-title')?.focus({ preventScroll: true });
      notify(`Check-in thành công cho ${person.name} (MSSV: ${person.studentId}). Tổng đã tham dự: ${counts().checked}.`);
    });
  }

  function undoCheckIn(id) {
    const person = getPerson(id);
    if (!person || person.status !== 'checked') { notify('Chỉ có thể hoàn tác người đã được ghi nhận tham dự.', 'warning'); return; }
    openDialog(`<h2 id="dialog-title">Hoàn tác check-in?</h2><p><strong>${esc(person.name)}</strong> (${person.id}) sẽ trở về trạng thái “Đã đăng ký”. Số người đã tham dự giảm một.</p><div class="field"><label for="undo-reason">Lý do hoàn tác (bắt buộc)</label><textarea id="undo-reason" class="input" rows="3" maxlength="300" aria-describedby="undo-error" placeholder="Ví dụ: Chọn nhầm người cùng tên hoặc quét nhầm mã"></textarea><p class="field-error" id="undo-error"></p></div><p id="dialog-status" class="dialog-status" role="status" aria-live="polite"></p><div class="action-row"><button type="button" class="button button-secondary" data-dialog-close autofocus>Giữ ghi nhận</button><button type="button" class="button button-danger" id="dialog-confirm">Xác nhận hoàn tác</button></div>`, () => {
      const field = $('#undo-reason');
      const reason = field.value.trim();
      if (!reason) {
        $('#undo-error').textContent = 'Nhập lý do trước khi hoàn tác.';
        field.setAttribute('aria-invalid', 'true');
        field.focus();
        return;
      }
      field.removeAttribute('aria-invalid');
      $('#undo-error').textContent = '';
      perform(() => {
        const latest = getPerson(id);
        if (latest.status !== 'checked') { $('#dialog-status').textContent = 'Trạng thái đã thay đổi. Không thể hoàn tác.'; return; }
        latest.status = 'registered';
        latest.undoReason = reason;
        latest.checkInAt = null;
        undoDrafts.delete(id);
        closeDialog();
        render();
        $('#check-person-title')?.focus({ preventScroll: true });
        notify(`Đã hoàn tác check-in của ${latest.name}.`);
      }, true);
    });
    $('#undo-reason').value = undoDrafts.get(id) || '';
    $('#undo-reason').addEventListener('input', event => undoDrafts.set(id, event.target.value));
  }

  function updateList() {
    $('#list-content').innerHTML = listContent();
    announce(`Có ${filteredPeople().length} kết quả phù hợp.`);
  }

  function updateCheckSearch() {
    state.checkSearch = $('#check-query').value.trim();
    const query = state.checkSearch.toUpperCase();
    const exact = state.people.find(p => p.id === query || (p.studentId && p.studentId.toUpperCase() === query));
    state.selected = exact?.id || null;
    $('#check-results').innerHTML = checkResults();
    $('#check-detail').innerHTML = checkDetail();
    announce(exact ? `Đã tìm thấy ${exact.name}. ${labels[exact.status]}.` : `${state.people.filter(p => normalize(`${p.name} ${p.studentId || ''} ${p.email} ${p.id}`).includes(normalize(state.checkSearch))).length} kết quả.`);
  }

  function downloadCsv() {
    if (!state.permission) { notify('Bạn chưa có quyền xuất danh sách. Bật lại quyền ở thanh công cụ rồi thử lại.', 'warning'); return; }
    const blob = new Blob(['\ufeff', csvText()], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'force-workshop-attendees-2026-11-26.csv';
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify(`Đã tạo tệp CSV gồm ${state.people.length} bản ghi với đầy đủ cột MSSV và thời điểm.`);
  }

  app.addEventListener('submit', event => {
    event.preventDefault();
    const id = event.target.id;
    if (id === 'registration-form') registrationSubmit();
    else if (id === 'lookup-form') lookupSubmit();
    else if (id === 'check-form') updateCheckSearch();
    else if (id === 'attendee-filters') updateList();
  });

  app.addEventListener('input', event => {
    if (event.target.id === 'attendee-search') { state.search = event.target.value; updateList(); }
  });

  app.addEventListener('change', event => {
    if (event.target.id === 'attendee-status') { state.filter = event.target.value; updateList(); }
  });

  app.addEventListener('click', event => {
    const errorLink = event.target.closest('[data-error-target]');
    if (errorLink) { event.preventDefault(); $(`#${errorLink.dataset.errorTarget}`)?.focus(); return; }

    const gotoBtn = event.target.closest('[data-action="goto-ticket"]');
    if (gotoBtn) {
      state.current = gotoBtn.dataset.id;
      nav('status');
      return;
    }

    const button = event.target.closest('[data-action]');
    if (!button) return;
    const id = button.dataset.id;

    switch (button.dataset.action) {
      case 'cancel': cancelRegistration(); break;
      case 'retry': if (retryAction) perform(retryAction); break;
      case 'check-in': checkIn(id); break;
      case 'undo-check-in': undoCheckIn(id); break;
      case 'download-csv': downloadCsv(); break;
      case 'clear-filters':
        state.search = ''; state.filter = 'all';
        $('#attendee-search').value = ''; $('#attendee-status').value = 'all';
        updateList(); $('#attendee-search').focus(); break;
      case 'select-person':
        state.selected = id;
        $('#check-results').innerHTML = checkResults();
        $('#check-detail').innerHTML = checkDetail();
        $('#check-person-title')?.focus({ preventScroll: true });
        announce(`${getPerson(id).name}. ${labels[getPerson(id).status]}.`); break;
      case 'clear-check-search':
        $('#check-query').value = ''; updateCheckSearch(); $('#check-query').focus(); break;
      case 'simulate-scan':
        // Mô phỏng quét mã QR: chọn người tiếp theo chưa check-in để thử
        const uncheck = state.people.find(p => p.status === 'registered') || state.people[0];
        $('#check-query').value = uncheck.id;
        updateCheckSearch();
        notify(`Đã quét mã QR của ${uncheck.name} (MSSV: ${uncheck.studentId || uncheck.id}). Bấm Xác nhận check-in để ghi nhận.`, 'info');
        break;
      default: break;
    }
  });

  dialog.addEventListener('click', event => {
    if (event.target.closest('[data-dialog-close]')) closeDialog();
    else if (event.target.closest('#dialog-confirm') && confirmAction) confirmAction();
  });

  dialog.addEventListener('close', () => {
    confirmAction = null;
    if (dialogReturn?.isConnected) dialogReturn.focus({ preventScroll: true });
  });

  $('#demo-role').addEventListener('change', event => nav(event.target.value === 'organizer' ? 'attendees' : 'event'));
  $('#demo-network').addEventListener('change', event => {
    state.online = event.target.value === 'online';
    announce(state.online ? 'Mạng mô phỏng đã khả dụng.' : 'Đang mô phỏng mất kết nối.');
  });
  $('#demo-permission').addEventListener('change', event => {
    state.permission = event.target.checked;
    announce(state.permission ? 'Đã bật quyền cập nhật.' : 'Đã tắt quyền cập nhật.');
  });
  $('#demo-reset').addEventListener('click', () => {
    undoDrafts.clear();
    state.people = fixtures(); state.current = null; state.selected = null; state.search = ''; state.filter = 'all'; state.checkSearch = ''; state.next = 8; state.online = true; state.permission = true;
    $('#demo-network').value = 'online'; $('#demo-permission').checked = true;
    if (route().params.has('id')) history.replaceState(null, '', '#check-in');
    render();
    announce('Đã đặt lại 7 bản ghi mẫu (4 đã đăng ký, 2 đã tham dự, 1 đã hủy, sức chứa 6).');
  });
  $('#demo-empty')?.addEventListener('click', () => {
    state.people = []; state.current = null; state.selected = null; state.search = ''; state.filter = 'all'; state.checkSearch = '';
    undoDrafts.clear();
    render();
    announce('Đã chuyển sang dữ liệu rỗng.');
  });
  $('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    const main = $('#main');
    if (main) { main.tabIndex = -1; main.focus(); main.scrollIntoView({ block: 'start' }); }
  });
  $('#demo-help').addEventListener('click', () => openDialog(`<h2 id="dialog-title">Hướng dẫn thử nghiệm Prototype Force</h2><p>Bản thử nghiệm V1 (đã nâng cấp) cho Workshop ngày 26/11/2026 với sức chứa tối đa <strong>${CAPACITY} chỗ chính thức</strong>.</p><ol class="dialog-list"><li><strong>Thử nghiệm MSSV:</strong> Đăng ký bằng tên, MSSV (ví dụ: 23IT099) và Email. Thử đăng ký trùng MSSV để kiểm tra cảnh báo và nút xem lại vé tức thì.</li><li><strong>Thử nghiệm Hàng chờ (Waitlist):</strong> Khi đã đủ ${CAPACITY} vé chính thức, đăng ký mới sẽ tự động vào Hàng chờ (Waitlist).</li><li><strong>Thử nghiệm Đôn chỗ tự động:</strong> Ở vai trò Sinh viên, tra cứu vé đã đăng ký và bấm Hủy vé. Hệ thống sẽ tự động chuyển vị trí trống cho người đầu tiên trong Hàng chờ!</li><li><strong>Thử nghiệm Mã QR & Check-in:</strong> Màn hình vé của sinh viên hiển thị mã QR trực quan. Sang vai trò Ban tổ chức, bấm "Quét mã QR mẫu" để tìm nhanh và xác nhận check-in.</li><li><strong>Xuất CSV:</strong> Vào trang Báo cáo để tải file CSV với đầy đủ cột MSSV và thời điểm check-in.</li></ol><div class="action-row"><button type="button" class="button button-primary" data-dialog-close autofocus>Đã hiểu</button></div>`));

  window.addEventListener('hashchange', () => render(true));
  render();
})();
