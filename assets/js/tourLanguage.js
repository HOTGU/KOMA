const languageSelect = document.querySelector("select[name=hostLanguage]");

const languageText = document.querySelectorAll(".languageText");

function handleSelect() {
  console.log(languageSelect.value);
  console.log(languageText.length);
  for (var i = 0; i < languageText.length; i++) {
    languageText[i].innerHTML = `* ${languageSelect.value}로 작성해주시길 바랍니다.`;
    languageText[i].style.color = "red";
  }
}

function init() {
  languageSelect.addEventListener("change", handleSelect);
}

if (languageSelect) {
  init();
}
