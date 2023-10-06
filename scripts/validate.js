// Função de validação botão save
function validateSaveFields() {
    const isNameValid = nameForm.checkValidity();
    const isInfoValid = infoForm.checkValidity();
  
    saveButton.classList.toggle(
      "button__save-off",
      !(isNameValid && isInfoValid)
    );
  }

  // Manipuladores de eventos de input botão save
nameForm.addEventListener("input", validateSaveFields);
infoForm.addEventListener("input", validateSaveFields);

// Função de validação botão create
function validateCreateFields() {
    const isNameValid = nameCreate.checkValidity();
    const isInfoValid = infoCreate.checkValidity();
  
    createButton.classList.toggle(
      "button__create-off",
      !(isNameValid && isInfoValid)
    );
  }
  
  // Manipuladores de eventos de input botão create
  nameCreate.addEventListener("input", validateCreateFields);
  infoCreate.addEventListener("input", validateCreateFields);