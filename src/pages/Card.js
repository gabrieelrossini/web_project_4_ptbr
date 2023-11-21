export default class Card {
  constructor(data, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card");
    return cardTemplate.cloneNode(true);
  }

  _setEventListeners() {
    const buttonHeart = this._element.querySelector(".button__heart");

    buttonHeart.addEventListener("click", () => {
      buttonHeart.classList.toggle("button__heart-active");
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__image").src = this._data.src;
    this._element.querySelector(".card__image").alt = this._data.alt;
    this._element.querySelector(".card__title").textContent = this._data.title;

    this._setEventListeners();

    return this._element;
  }
}