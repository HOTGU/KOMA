const photosContainer = document.querySelector(".photos-container");

function numChange(num) {
  const fileSelect = document.getElementById(`fileSelect-${num}`),
    fileElem = document.getElementById(`fileElem-${num}`),
    fileList = document.getElementById(`fileList-${num}`);
  function fileListClick(e) {
    if (fileElem) {
      fileElem.click();
      console.log("he");
    }
    e.preventDefault(); // prevent navigation to "#"
  }

  function handleFiles() {
    const files = this.files;
    if (!files.length) {
      fileList.innerHTML = "<p>No files selected!</p>";
    } else {
      fileList.innerHTML = "";
      const list = document.createElement("ul");
      fileList.appendChild(list);
      for (let i = 0; i < files.length; i++) {
        const li = document.createElement("li");
        list.appendChild(li);

        const img = document.createElement("img");
        img.src = URL.createObjectURL(files[i]);
        img.height = 60;
        img.onload = function() {
          URL.revokeObjectURL(this.src);
        };
        li.appendChild(img);
      }
    }
  }
  fileSelect.addEventListener("click", fileListClick, false);
  fileElem.addEventListener("change", handleFiles, false);
}

function init() {
  numChange(1);
  numChange(2);
  numChange(3);
  numChange(4);
}

if (photosContainer) {
  init();
}
