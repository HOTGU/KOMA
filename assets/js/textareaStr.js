const program = document.querySelector("textarea[name=description]");
const host = document.querySelector("textarea[name=hostself]");
const programResult = document.getElementById("textareaResult");
const hostResult = document.getElementById("hostResult");
const submit = document.querySelector("button[type=submit]");

function countProgram() {
  const str = this.value.length;
  programResult.innerHTML = `${str} / 1400`;
  programResult.style.color = "white";
  program.style.border = "3px solid rgb(60,60,192)";
  program.style.opacity = "1";
}

function countHost() {
  const str = this.value.length;
  hostResult.innerHTML = `${str} / 1400`;
  hostResult.style.color = "white";
  host.style.border = "3px solid rgb(60,60,192)";
  host.style.opacity = "1";
}

function blurProgram() {
  const str = this.value.length;
  const minLength = 400;
  const moreLength = minLength - str;
  if (str < minLength) {
    programResult.innerHTML = `${moreLength}자를 더 입력해주세요`;
    programResult.style.color = "red";
    program.style.border = "3px solid red";
    program.style.opacity = "0.8";
  } else {
    program.style.border = "3px solid blue";
    program.style.opacity = "1";
  }
}

function blurHost() {
  const str = this.value.length;
  const minLength = 400;
  const moreLength = minLength - str;
  if (str < minLength) {
    hostResult.innerHTML = `${moreLength}자를 더 입력해주세요`;
    hostResult.style.color = "red";
    host.style.border = "3px solid red";
    host.style.opacity = "0.8";
  } else {
    host.style.border = "3px solid blue";
    host.style.opacity = "1";
  }
}

function focusProgram() {
  const str = this.value.length;
  programResult.innerHTML = `${str} / 1400`;
  programResult.style.color = "white";
  program.style.border = "3px solid rgb(60,60,192)";
  program.style.opacity = "1";
}

function focusHost() {
  const str = this.value.length;
  hostResult.innerHTML = `${str} / 1400`;
  hostResult.style.color = "white";
  host.style.border = "3px solid rgb(60,60,192)";
  host.style.opacity = "1";
}

function clickSubmit(e) {
  const programStr = program.value.length;
  const hostStr = host.value.length;
  if (programStr <= 400) {
    alert("프로그램 내용을 더 적어주세요");
    return false;
  } else if (hostStr <= 400) {
    alert("자기소개 내용을 더 적어주세요");
    e.preventDefault();
  } else {
    true;
  }
}

function init() {
  program.addEventListener("keyup", countProgram, false);
  host.addEventListener("keyup", countHost, false);
  program.addEventListener("blur", blurProgram, false);
  host.addEventListener("blur", blurHost, false);
  program.addEventListener("focus", focusProgram, false);
  host.addEventListener("focus", focusHost, false);
  submit.addEventListener("click", clickSubmit);
}

if (program) {
  init();
}
