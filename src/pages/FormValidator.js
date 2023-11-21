class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorSelector = config.errorSelector;

    this._form = formElement;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
    }
  
    _hideInputError(inputElement) {
      const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.textContent = '';
    }
  
    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  
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
  
    enableValidation() {
      this._setEventListeners();
    }
  
    resetValidation() {
      this._inputList.forEach(inputElement => {
        this._hideInputError(inputElement);
      });
  
      this._toggleButtonState();
    }
  }
  
  export default FormValidator;
  
  