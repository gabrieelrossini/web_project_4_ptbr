// Definição da classe FormValidator
class FormValidator {
  constructor(config, formElement) {
    // Configurações gerais do validador
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorSelector = config.errorSelector;

    // Elementos do formulário
    this._form = formElement;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  // Método privado para mostrar mensagens de erro nos inputs
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  // Método privado para esconder mensagens de erro nos inputs
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  // Método privado para verificar a validade dos inputs
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Método privado para alternar o estado do botão de submissão
  _toggleButtonState() {
    const isValid = this._inputList.every(inputElement => inputElement.validity.valid);
    if (isValid) {
      this._submitButton.classList.remove(...this._inactiveButtonClass.split(' '));
      this._submitButton.removeAttribute('disabled');
    } else {
      this._submitButton.classList.add(...this._inactiveButtonClass.split(' '));
      this._submitButton.setAttribute('disabled', true);
    }
  }

  // Método privado para configurar os ouvintes de eventos
  _setEventListeners() {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }

  // Método público para habilitar a validação do formulário
  enableValidation() {
    this._setEventListeners();
  }

  // Método público para resetar a validação do formulário
  resetValidation() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    });

    this._toggleButtonState();
  }
}

// Exportação da classe FormValidator como padrão
export default FormValidator;

  
  