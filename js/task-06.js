const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", checkValidation);

function checkValidation() {
  const length = Number(inputEl.dataset.length);
  const isValid = inputEl.value.length === length;

  inputEl.classList.remove("valid", "invalid");

  if (isValid) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
