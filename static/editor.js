const editor = new EditorJS({
  autofocus: true,
  tools: {
    image: SimpleImage
  },
  data: {
    time: 1552744582955,
    blocks: [
      {
        type: "image",
        data: {
          url:
            "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg"
        }
      }
    ],
    version: "2.11.10"
  }
});

const saveButton = document.getElementById("save-button");
const output = document.getElementById("output");

saveButton.addEventListener("click", () => {
  editor.save().then(savedData => {
    output.innerHTML = JSON.stringify(savedData, null, 4);
  });
});
