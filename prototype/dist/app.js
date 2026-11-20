"use strict";

const byId = (id) => document.getElementById(id);
const scenario = byId("scenario");
const form = byId("form");
const fields = [byId("name"), byId("email")];
const sampleEmail = "an@example.test";
const eventName = "Nói để kết nối";
const records = new Map();
const submissions = new Map();
let currentRecord;
let attemptKey = 0;
let sequence = 0;
let saveFailed = false;
let mailFailed = false;

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
  setStatus("availability", isClosed ? "Đã đóng đăng ký" : "Đang nhận đăng ký", isClosed ? "warning" : "success");
  if (focus) byId(screen).querySelector("h1").focus();
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

function openForm() {
  attemptKey += 1;
  form.reset();
  fields.forEach((field) => fieldError(field, ""));
  formNotice();
  showScreen("register");
}

function saveRegistration(key, name, email) {
  if (submissions.has(key)) return submissions.get(key);
  const record = {
    id: "FOR-" + String(++sequence).padStart(3, "0"),
    name,
    email,
    pending: scenario.value === "review",
    messages: [],
    mailStatus: "ready"
  };
  submissions.set(key, record);
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

function showResult() {
  const record = currentRecord;
  const failed = record.mailStatus === "failed";
  setStatus("registration-status", record.pending ? "Chờ duyệt" : "Đã xác nhận", record.pending ? "warning" : "success");
  byId("result-title").textContent = record.pending ? "Đã tiếp nhận hồ sơ" : "Đăng ký thành công";
  byId("result-copy").textContent = record.pending
    ? "BTC cần duyệt hồ sơ trước khi xác nhận chỗ."
    : "Bạn đã có chỗ trong workshop Nói để kết nối.";
  byId("reference").textContent = record.id;
  setStatus("mail-status", failed
    ? "Gửi email thất bại. Đăng ký vẫn được lưu."
    : "Đã gửi thư mô phỏng đến " + record.email + ".", failed ? "error" : "success");
  byId("view-mail").hidden = !record.messages.length;
  byId("resend").hidden = !failed;
  byId("approve").hidden = !record.pending;
  showScreen("result");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (scenario.value === "closed") {
    showScreen("detail");
    return;
  }
  formNotice();
  const [nameField, emailField] = fields;
  const name = nameField.value.trim();
  const email = emailField.value.trim().toLowerCase();
  fieldError(nameField, name ? "" : "Nhập họ và tên.");
  fieldError(emailField, email && emailField.validity.valid ? "" : "Nhập email hợp lệ.");
  const invalidField = fields.find((field) => field.hasAttribute("aria-invalid"));
  if (invalidField) {
    invalidField.focus();
    return;
  }
  if (records.has(email) || (scenario.value === "duplicate" && email === sampleEmail)) {
    fieldError(emailField, "Email này đã có đăng ký cho sự kiện.");
    emailField.focus();
    return;
  }
  if (scenario.value === "save-error" && !saveFailed) {
    saveFailed = true;
    formNotice("Chưa lưu được đăng ký. Hãy bấm Gửi đăng ký để thử lại.");
    return;
  }
  currentRecord = saveRegistration(attemptKey, name, email);
  if (scenario.value === "repeat") saveRegistration(attemptKey, name, email);
  sendMail(currentRecord);
  showResult();
});

function resetSession() {
  records.clear();
  submissions.clear();
  currentRecord = undefined;
  sequence = 0;
  saveFailed = false;
  mailFailed = false;
  document.querySelector(".DemoControls").open = false;
  showScreen("detail");
}

byId("start").addEventListener("click", openForm);
byId("back").addEventListener("click", () => showScreen("detail"));
byId("new-entry").addEventListener("click", () => showScreen("detail"));
fields.forEach((field) => field.addEventListener("input", () => fieldError(field, "")));
byId("fill").addEventListener("click", () => {
  byId("name").value = "Nguyễn An";
  byId("email").value = sampleEmail;
  fields.forEach((field) => fieldError(field, ""));
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

showScreen("detail", false);
