import Quill from "quill";

const form = document.querySelector("form");

const toolbaOptions = [
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  [({ list: "ordered" }, { list: "bullet" })],
  [{ indent: "-1" }, { indent: "+1" }],
  ["link", "image", "video"]
];
const option = {
  modules: {
    toolbar: toolbaOptions
  },
  placeholder: "Korea is awesome!!",
  theme: "snow"
};

const quill = new Quill("#editor", option);

form.onsubmit = () => {
  const description = document.querySelector("input[name=description]");
  description.value = quill.root.innerHTML;
};

export default editor;
