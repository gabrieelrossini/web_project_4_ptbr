import "./styles/index.css";

import { cardsData } from './pages/cardsData.js';
import { handleKeydownEvent, openPopup } from './pages/utils.js';
import Card from './pages/Card.js'; // Importe a classe Card
import FormValidator from './pages/FormValidator.js';

const editButton = document.querySelector('.button__edit');
const form = document.querySelector('.form');
const saveButton = document.querySelector('.button__save');
const nameForm = form.querySelector('.form__name');
const infoForm = form.querySelector('.form__info');
const nameData = document.querySelector('.data__name');
const infoData = document.querySelector('.data__info');

editButton.addEventListener('click', function () {
  form.classList.add('form-active');
});

saveButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (nameForm.checkValidity() && infoForm.checkValidity()) {
    const newName = nameForm.value;
    const newInfo = infoForm.value;
    nameData.textContent = newName;
    infoData.textContent = newInfo;
    form.classList.remove('form-active');
  }
});

const closeButton = document.querySelector('.button__close');

closeButton.addEventListener('click', function (event) {
  event.preventDefault();
  form.classList.remove('form-active');
});


const cardTemplate = document.querySelector('#card-template');
const cardContainer = document.querySelector('.cards');

function addHeartEvent(card) {
  const buttonHeart = card.querySelector('.button__heart');

  buttonHeart.addEventListener('click', () => {
    buttonHeart.classList.toggle('button__heart-active');
  });
}

cardsData.forEach((data) => {
  const cardInstance = new Card(data, '#card-template');
  const cardElement = cardInstance.generateCard();

  const buttonTrash = document.createElement('button');
  buttonTrash.classList.add('button__trash');
  cardElement.appendChild(buttonTrash);

  // Adicionar um evento de clique para o botão trash
  buttonTrash.addEventListener('click', function () {
    // Remove o card do DOM
    cardContainer.removeChild(cardElement);
  });

  cardContainer.appendChild(cardElement);
  addClickEventToImage(cardElement);
});

const popup = document.querySelector('.popup');

function addClickEventToImage(card) {
  const image = card.querySelector('.card__image');
  image.addEventListener('click', handleImageClick);
}

function handleImageClick(e) {
  const image = e.currentTarget;
  const src = image.src;
  const imageTitle = image.alt;
  openPopup(src, imageTitle);
}

const addButton = document.querySelector('.button__add');
const create = document.querySelector('.create');

addButton.addEventListener('click', function () {
  create.classList.toggle('create-active');
  create.classList.toggle('create');
  formCreateValidator.resetValidation();
});

const createButton = document.querySelector('.button__create');
const nameCreate = document.querySelector('.create__name');
const infoCreate = document.querySelector('.create__info');

createButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (!nameCreate.checkValidity() || !infoCreate.checkValidity()) {
    return;
  }

  const name = nameCreate.value;
  const imageSrc = infoCreate.value;
  const cardInstance = new Card({ title: name, src: imageSrc, alt: name }, '#card-template');
  const cardElement = cardInstance.generateCard();
  
  cardContainer.appendChild(cardElement);

  nameCreate.value = '';
  infoCreate.value = '';

  create.classList.toggle('create-active');
  create.classList.toggle('create');
});

const exitButton = document.querySelector('.button__exit');

exitButton.addEventListener('click', function () {
  event.preventDefault();
  create.classList.remove('create-active');
  create.classList.add('create');
});

const formValidatorConfig = {
  formSelector: '.form, .create',
  inputSelector: '.form__name, .form__info, .create__name, .create__info',
  submitButtonSelector: '.button__save, .button__create',
  inactiveButtonClass: 'button__save-off, button__create-off',
  inputErrorClass: 'input-invalid',
  errorSelector: '.span',
};

const formEditValidator = new FormValidator(formValidatorConfig, document.querySelector('.form'));
formEditValidator.enableValidation();

const formCreateValidator = new FormValidator(formValidatorConfig, document.querySelector('.create'));
formCreateValidator.enableValidation();


document.addEventListener('keydown', (event) => {
  handleKeydownEvent(event, form, create, popup);
});