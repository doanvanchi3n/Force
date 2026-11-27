"use strict";

const byId = (id) => document.getElementById(id);
const scenario = byId("scenario");
const form = byId("form");
const fields = [byId("name"), byId("email")];
const emailValidator = document.createElement("input");
emailValidator.type = "email";
const sampleEmail = "an@example.test";
const eventName = "Nói để kết nối";
const unconfirmedNotice = "Chưa xác định kết quả. Gửi lại đúng thông tin để đối soát lượt gửi.";
const mode = new URLSearchParams(location.search).get("mode") === "bid" ? "bid" : "core";
const isCore = mode === "core";
const storageKey = "force.registration.session.v1." + mode;
document.body.dataset.mode = mode;
byId("variant").textContent = isCore ? "Bản thử core" : "Bản thử BID";
byId("other-variant").href = isCore ? "?mode=bid" : "./index.html";
byId("other-variant").textContent = isCore ? "Mở bản BID" : "Mở bản core";
if (isCore) {
  scenario.options[0].textContent = "Đang nhận đăng ký";
  fields.forEach((field) => field.removeAttribute("maxlength"));
}
for (const option of [...scenario.options]) {
  if (option.dataset.mode && option.dataset.mode !== mode) option.remove();
}
const records = new Map();
let lastSubmission;
let unconfirmedRecord;
let currentRecord;
let sequence = 0;
let saveFailed = false;
let mailFailed = false;

function persistSession() {
  const screen = document.body.dataset.screen;
  const draft = screen === "register" ? fields.map((field) => field.value) : [];
  const formError = screen === "register" ? byId("form-note").textContent : "";
  try {
    sessionStorage.setItem(storageKey, JSON.stringify({
      scenario: scenario.value,
      screen,
      records: [...records.values()],
      currentEmail: currentRecord?.email,
      unconfirmedEmail: unconfirmedRecord?.email,
      draft,
      formError,
      saveFailed,
      mailFailed
    }));
    byId("storage-note").hidden = true;
  } catch {
    byId("storage-note").hidden = false;
  }
}

function restoreSession() {
  let raw;
  try {
    raw = sessionStorage.getItem(storageKey);
  } catch {
    byId("storage-note").hidden = false;
    return "detail";
  }

  if (raw === null) return "detail";
  try {
    const saved = JSON.parse(raw);
    const validRecords = Array.isArray(saved?.records) && saved.records.every((record, index) =>
      record?.id === "FOR-" + String(index + 1).padStart(3, "0") &&
      typeof record.email === "string" && typeof record.name === "string" &&
      typeof record.pending === "boolean" && ["ready", "sent", "failed"].includes(record.mailStatus) &&
      Array.isArray(record.messages) && record.messages.every((message) =>
        typeof message?.subject === "string" && typeof message.status === "string"));
    if (!validRecords || !Array.from(scenario.options).some((option) => option.value === saved.scenario) ||
        !["detail", "register", "result"].includes(saved.screen)) return "detail";

    scenario.value = saved.scenario;
    saved.records.forEach((record) => records.set(record.email, record));
    sequence = saved.records.length;
    currentRecord = records.get(saved.currentEmail);
    unconfirmedRecord = records.get(saved.unconfirmedEmail);
    saveFailed = saved.saveFailed === true;
    mailFailed = saved.mailFailed === true;
    if (saved.screen === "result" && currentRecord) return "result";
    if (saved.screen === "register" && scenario.value !== "closed") {
      fields.forEach((field, index) => {
        if (typeof saved.draft?.[index] === "string") field.value = saved.draft[index];
      });
      if (typeof saved.formError === "string") formNotice(saved.formError);
      return "register";
    }
  } catch {
    return "detail";
  }
  return "detail";
}

function setStatus(id, label, tone) {
  const element = byId(id);
  element.textContent = label;
  element.dataset.tone = tone;
}

function showScreen(screen, focus = true) {
  const screens = ["detail", "register", "result"];
  document.body.dataset.screen = screen;
  screens.forEach((name, index) => {
    byId(name).hidden = name !== screen;
    const step = document.querySelectorAll(".StepNav li")[index];
    if (name === screen) step.setAttribute("aria-current", "step");
    else step.removeAttribute("aria-current");
  });
  const isClosed = scenario.value === "closed";
  byId("start").hidden = isClosed;
  byId("closed").hidden = !isClosed;
  byId("resume-result").hidden = !currentRecord || Boolean(unconfirmedRecord);
  setStatus("availability", isClosed ? "Đã đóng đăng ký" : "Đang nhận đăng ký", isClosed ? "warning" : "success");
  if (focus) {
    persistSession();
    byId(screen).querySelector("h1").focus();
  }
}

function fieldError(field, message) {
  byId(field.id + "-error").textContent = message;
  if (message) field.setAttribute("aria-invalid", "true");
  else field.removeAttribute("aria-invalid");
}

function formNotice(message = "") {
  byId("form-note").textContent = message;
  byId("form-note").hidden = !message;
}

function updateErrorSummary(focus = false) {
  const items = fields.filter((field) => field.hasAttribute("aria-invalid")).map((field) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#" + field.id;
    link.textContent = byId(field.id + "-error").textContent;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      field.focus();
    });
    item.append(link);
    return item;
  });
  byId("form-error-links").replaceChildren(...items);
  const summary = byId("form-errors");
  summary.hidden = items.length === 0;
  if (focus && items.length) summary.focus();
}

function openForm() {
  if (scenario.value === "closed") return;
  lastSubmission = undefined;
  form.reset();
  fields.forEach((field) => fieldError(field, ""));
  updateErrorSummary();
  if (unconfirmedRecord) {
    fields[0].value = unconfirmedRecord.name;
    fields[1].value = unconfirmedRecord.email;
  }
  formNotice(unconfirmedRecord ? unconfirmedNotice : "");
  showScreen("register");
}

function saveRegistration(name, email) {
  if (lastSubmission) return lastSubmission;
  const record = {
    id: "FOR-" + String(++sequence).padStart(3, "0"),
    name,
    email,
    pending: scenario.value === "review",
    messages: [],
    mailStatus: "ready"
  };
  lastSubmission = record;
  records.set(email, record);
  return record;
}

function sendMail(record) {
  if (scenario.value === "mail-error" && !mailFailed) {
    mailFailed = true;
    record.mailStatus = "failed";
    return;
  }
  record.messages.unshift({
    subject: record.pending ? "Đã tiếp nhận hồ sơ · " + eventName : "Xác nhận đăng ký · " + eventName,
    status: record.pending ? "Hồ sơ đã được tiếp nhận và đang chờ BTC duyệt." : "Đăng ký của bạn đã được xác nhận."
  });
  record.mailStatus = "sent";
}

function showResult(focus = true) {
  const record = currentRecord;
  byId("reference").textContent = record.id;
  if (isCore) {
    setStatus("registration-status", "Đã đăng ký", "neutral");
    byId("result-title").textContent = "Kết quả đăng ký";
    byId("result-copy").textContent = "Đăng ký workshop Nói để kết nối đã được ghi nhận trong bản thử.";
    byId("mail-status").hidden = true;
    byId("view-mail").hidden = true;
    showScreen("result", focus);
    return;
  }
  const failed = record.mailStatus === "failed";
  setStatus("registration-status", record.pending ? "Chờ duyệt" : "Đã xác nhận", record.pending ? "warning" : "success");
  byId("result-title").textContent = record.pending ? "Đã tiếp nhận hồ sơ" : "Đăng ký thành công";
  byId("result-copy").textContent = record.pending
    ? "BTC cần duyệt hồ sơ trước khi xác nhận chỗ."
    : "Bạn đã có chỗ trong workshop Nói để kết nối.";
  setStatus("mail-status", failed
    ? "Gửi email thất bại. Đăng ký vẫn được lưu."
    : "Đã gửi thư mô phỏng đến " + record.email + ".", failed ? "error" : "success");
  byId("view-mail").hidden = !record.messages.length;
  byId("resend").hidden = !failed;
  byId("approve").hidden = !record.pending;
  showScreen("result", focus);
}

function submitRegistration() {
  if (scenario.value === "closed") {
    showScreen("detail");
    return;
  }
  formNotice(unconfirmedRecord ? unconfirmedNotice : "");
  const [nameField, emailField] = fields;
  const name = isCore ? nameField.value.trim().replace(/\s+/gu, " ") : nameField.value.trim();
  const email = emailField.value.trim().toLowerCase();
  emailValidator.value = email;
  const nameLength = [...name].length;
  const nameError = !name ? "Nhập họ và tên." :
    isCore && (nameLength < 2 || nameLength > 80) ? "Họ và tên cần dài từ 2 đến 80 ký tự." : "";
  fieldError(nameField, nameError);
  fieldError(emailField, email && email.length <= 254 && !emailValidator.validity.typeMismatch ? "" : "Nhập email hợp lệ, tối đa 254 ký tự.");
  const hasErrors = fields.some((field) => field.hasAttribute("aria-invalid"));
  updateErrorSummary(hasErrors);
  if (hasErrors) {
    persistSession();
    return;
  }
  if (unconfirmedRecord) {
    if (unconfirmedRecord.email !== email || unconfirmedRecord.name !== name) {
      formNotice("Chưa xác định kết quả. Thông tin khác lượt gửi đang chờ đối soát. Về chi tiết rồi mở lại biểu mẫu để khôi phục thông tin của lượt đó.");
      persistSession();
      return;
    }
    currentRecord = unconfirmedRecord;
    unconfirmedRecord = undefined;
    showResult();
    return;
  }
  if (records.has(email) || (scenario.value === "duplicate" && email === sampleEmail)) {
    fieldError(emailField, "Email này đã có đăng ký cho sự kiện.");
    updateErrorSummary(true);
    persistSession();
    return;
  }
  if (scenario.value === "save-error" && !saveFailed) {
    saveFailed = true;
    formNotice("Chưa lưu được đăng ký. Hãy bấm Gửi đăng ký để thử lại.");
    persistSession();
    return;
  }
  const record = saveRegistration(name, email);
  if (scenario.value === "repeat") saveRegistration(name, email);
  if (scenario.value === "timeout") {
    unconfirmedRecord = record;
    formNotice(unconfirmedNotice);
    persistSession();
    return;
  }
  currentRecord = record;
  if (!isCore) sendMail(record);
  showResult();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const submit = byId("submit");
  if (byId("register").hidden || submit.disabled) return;
  submit.disabled = true;
  try {
    submitRegistration();
  } finally {
    submit.disabled = false;
  }
});

function resetSession() {
  records.clear();
  lastSubmission = undefined;
  unconfirmedRecord = undefined;
  currentRecord = undefined;
  form.reset();
  fields.forEach((field) => fieldError(field, ""));
  updateErrorSummary();
  formNotice();
  sequence = 0;
  saveFailed = false;
  mailFailed = false;
  document.querySelector(".DemoControls").open = false;
  showScreen("detail");
}

byId("start").addEventListener("click", openForm);
byId("resume-result").addEventListener("click", () => showResult());
byId("back").addEventListener("click", () => showScreen("detail"));
byId("new-entry").addEventListener("click", () => showScreen("detail"));
fields.forEach((field) => field.addEventListener("input", () => {
  fieldError(field, "");
  updateErrorSummary();
  persistSession();
}));
byId("fill").addEventListener("click", () => {
  byId("name").value = "Nguyễn An";
  byId("email").value = sampleEmail;
  fields.forEach((field) => fieldError(field, ""));
  updateErrorSummary();
  persistSession();
});
byId("reset").addEventListener("click", resetSession);
scenario.addEventListener("change", resetSession);
byId("resend").addEventListener("click", () => {
  sendMail(currentRecord);
  showResult();
});
byId("approve").addEventListener("click", () => {
  currentRecord.pending = false;
  sendMail(currentRecord);
  showResult();
});
byId("view-mail").addEventListener("click", () => {
  const record = currentRecord;
  const messages = record.messages.map((message) => {
    const article = document.createElement("article");
    const subject = document.createElement("strong");
    subject.textContent = message.subject;
    article.append(subject);
    for (const line of ["Đến " + record.email, message.status, "Mã đăng ký " + record.id, "09:00–11:00 · 12/12/2026 · Phòng A101"]) {
      const paragraph = document.createElement("p");
      paragraph.textContent = line;
      article.append(paragraph);
    }
    return article;
  });
  byId("messages").replaceChildren(...messages);
  byId("inbox").showModal();
});

const restoredScreen = restoreSession();
if (restoredScreen === "result") showResult(false);
else showScreen(restoredScreen, false);
