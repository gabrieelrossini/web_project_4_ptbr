// Função de validação botão save
function validateSaveFields() {
  const isNameValid = nameForm.checkValidity();
  const isInfoValid = infoForm.checkValidity();

  saveButton.classList.toggle(
    "button__save-off",
    !(isNameValid && isInfoValid)
  );
}

// Função de validação botão create
function validateCreateFields() {
  const isNameValid = nameCreate.checkValidity();
  const isInfoValid = infoCreate.checkValidity();

  createButton.classList.toggle(
    "button__create-off",
    !(isNameValid && isInfoValid)
  );
}

// Valide todas as configurações
function enableValidation(event) {
const forms = document.querySelectorAll(config.formSelector);

forms.forEach((form) => {
  form.addEventListener("input", (event) => {
    const inputElement = event.target;
    const errorElement = inputElement.nextElementSibling;

    if (inputElement.validity.valid) {
      inputElement.classList.remove(config.inputErrorClass);
      errorElement.textContent = '';
      ativarButton();
    } else {
      inputElement.classList.add(config.inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
      desativarButton();
    }
  });
});
}

const config = {
formSelector: "form",
inputSelector: ".form__name, .form__info, .create__name, .create__info",
submitButtonSelector: ".button__save, .button__create",
inactiveButtonClass: "button__save-off, button__create-off",
inputErrorClass: "form__name-invalid",
errorSelector: ".span",
};

// Adicione validação aos campos existentes
nameForm.addEventListener("input", validateSaveFields);
infoForm.addEventListener("input", validateSaveFields);
nameCreate.addEventListener("input", validateCreateFields);
infoCreate.addEventListener("input", validateCreateFields);

// Ative a validação
enableValidation(config);