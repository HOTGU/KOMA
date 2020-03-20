const tourContainer = document.querySelector(".tour-container");
const form = document.querySelector("form");

const titleBtn = document.getElementById("jsTourTitleBtn");
const photoBtn = document.getElementById("jsTourPhotosBtn");
const conceptBtn = document.getElementById("jsTourConceptBtn");
const programBtn = document.getElementById("jsTourProgramBtn");
const courseBtn = document.getElementById("jsTourCourseBtn");

function handleShowBtn(idName) {
  const tourList = form.childNodes;
  console.log(tourList);
  for (let x = 0; x < tourList.length; x++) {
    if (tourList[x].id === idName) {
      tourList[x].classList.remove("hidden");
    } else {
      tourList[x].classList.add("hidden");
    }
  }
}

function init() {
  titleBtn.onclick = () => {
    handleShowBtn("jsTourTitle");
  };
  photoBtn.onclick = () => {
    handleShowBtn("jsTourPhotos");
  };
  conceptBtn.onclick = () => {
    handleShowBtn("jsTourConcept");
  };
  programBtn.onclick = () => {
    handleShowBtn("jsTourProgram");
  };
  courseBtn.onclick = () => {
    handleShowBtn("jsTourCourse");
  };
}

if (tourContainer) {
  init();
}
