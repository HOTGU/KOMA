const previewImg = document.querySelector(".preview-img");
const inputImg = document.querySelector(".imgInput");
const label = document.querySelector(".imgLabel");

let reader = new FileReader();

function handleInputImg(event) {
  let imgFile = event.target.files[0];
  reader.readAsDataURL(imgFile);
  reader.onload = e => {
    previewImg.classList.remove("hidden");
    previewImg.setAttribute("src", e.target.result);
  };
  label.innerHTML = "📸 Change";
}

function init() {
  inputImg.addEventListener("change", handleInputImg);
}

if (previewImg) {
  init();
}
