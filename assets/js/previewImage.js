// const previewImg = document.querySelector(".preview-img");
const inputImg = document.querySelector(".imgInput");
const courseInput = document.querySelector(".courseInput");
const label = document.querySelector(".imgLabel");

let reader = new FileReader();

function handleInputImg(event) {
  let imgFile = event.target.files[0];
  let imgUrl = reader.readAsDataURL(imgFile);
  reader.onload = (e) => {
    console.log(imgUrl);
    label.style.backgroundImage = `url(${e.target.result})`;
    label.style.backgroundSize = "cover";
    label.style.backgroundRepeat = "no-repeat";
    label.style.backgroundPosition = "center";
    label.classList.add("photo");
    label.style.color = "black";
  };
  label.innerHTML = "";
}

function init() {
  inputImg.addEventListener("change", handleInputImg);
  // courseInput.addEventListener("change", handleCourseInput);
}

if (inputImg) {
  init();
}
