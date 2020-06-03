const courseBtn = document.getElementById("courseCreateBtn");
const courseContainer = document.querySelector(".course-description-container");

let num = 2;

function numChange(num) {
  const label = document.getElementById(`cl-${num}`);
  const input = document.getElementById(`cp-${num}`);
  function labelClick() {
    if (input) {
      input.click();
    }
  }
  function handleFiles(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
    let url = reader.readAsDataURL(file);
    reader.onload = (e) => {
      label.style.backgroundImage = `url(${e.target.result})`;
      label.style.backgroundSize = "cover";
      label.style.backgroundRepeat = "no-repeat";
      label.style.backgroundPosition = "center";
      label.classList.add("photo");
      label.style.color = "black";
    };
    label.innerHTML = "📸 Change";
  }
  label.addEventListener("click", labelClick, false);
  input.addEventListener("change", handleFiles, false);
}

function handleBtn() {
  const courseNum = document.createElement("div");
  courseNum.classList.add("course-num");
  courseNum.innerHTML = `${num}번째 코스`;
  const courseList = document.createElement("div");
  courseList.classList.add("course-list");
  const photoContainer = document.createElement("div");
  photoContainer.classList.add("course-photo");
  const textContainer = document.createElement("div");
  textContainer.classList.add("course-text");
  const label = document.createElement("label");
  label.id = `cl-${num}`;
  label.innerHTML = "Photo";
  label.classList.add("courseLabel");
  label.for = "coursePhoto";
  const input = document.createElement("input");
  input.type = "file";
  input.name = "coursePhoto";
  input.id = `cp-${num}`;
  input.classList.add("courseInput");
  input.style.display = "none";
  const textarea = document.createElement("textarea");
  textarea.name = "courseText";
  courseContainer.appendChild(courseNum);
  courseContainer.appendChild(courseList);
  courseList.appendChild(photoContainer);
  courseList.appendChild(textContainer);
  photoContainer.appendChild(label);
  photoContainer.appendChild(input);
  textContainer.appendChild(textarea);
  numChange(num);
  num++;
}

function init() {
  courseBtn.addEventListener("click", handleBtn);
  numChange(1);
}

if (courseBtn) {
  init();
}
