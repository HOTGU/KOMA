const conceptBtn = document.querySelector(".category-button");
const text = document.querySelector(".button-text");
const saveBtn = document.querySelector(".conceptSave");
const conceptContent = document.querySelector(".category-content");
const body = document.querySelector("main");

function handleConceptBtn() {
  if (conceptContent.style.display === "block") {
    conceptContent.style.display = "none";
    handleSaveBtn();
  } else {
    conceptContent.style.display = "block";
  }
}

function handleSaveBtn() {
  const conceptAll = document.querySelectorAll(".tourConcept");
  let selectConcept = [];
  for (var i = 0; i < conceptAll.length; i++) {
    if (conceptAll[i].checked === true) {
      selectConcept.push(conceptAll[i].value);
    }
  }
  if (!selectConcept.length) {
    text.textContent = "Concept";
  } else {
    text.innerHTML = selectConcept;
  }
  conceptContent.style.display = "none";
}

function init() {
  conceptBtn.addEventListener("click", handleConceptBtn);
  saveBtn.addEventListener("click", handleSaveBtn);
}

if (conceptBtn) {
  init();
}
