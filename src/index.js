// Importando estilos CSS
import "./styles/index.css";

// Importando os cards iniciais

import { cardsData } from './utils/constants.js';

// Importando funções e classes de utilidade

import { handleKeydownEvent, openPopup } from './utils/utils.js';

// Importando a classe Card

import Card from './components/Card.js';

// Importando as regras de validação de formulário

import FormValidator from './components/FormValidator.js';

// Selecionando elementos do DOM

const editButton = document.querySelector('.button__edit');
const form = document.querySelector('.form');
const saveButton = document.querySelector('.button__save');
const nameForm = form.querySelector('.form__name');
const infoForm = form.querySelector('.form__info');
const nameData = document.querySelector('.data__name');
const infoData = document.querySelector('.data__info');
const closeButton = document.querySelector('.button__close');
const cardTemplate = document.querySelector('#card-template');
const cardContainer = document.querySelector('.cards');
const popup = document.querySelector('.popup');
const addButton = document.querySelector('.button__add');
const create = document.querySelector('.create');
const createButton = document.querySelector('.button__create');
const nameCreate = document.querySelector('.create__name');
const infoCreate = document.querySelector('.create__info');
const exitButton = document.querySelector('.button__exit');

// Adicionando evento de clique ao botão de edição para exibir o formulário de edição

editButton.addEventListener('click', function () {
  form.classList.add('form-active');
});

// Adicionando evento de clique ao botão de salvamento no formulário de edição

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

// Adicionando evento de clique ao botão de fechar no formulário de edição

closeButton.addEventListener('click', function (event) {
  event.preventDefault();
  form.classList.remove('form-active');
});

// Adicionando evento de clique ao botão like

function addHeartEvent(card) {
  const buttonHeart = card.querySelector('.button__heart');

  buttonHeart.addEventListener('click', () => {
    buttonHeart.classList.toggle('button__heart-active');
  });
}

// Iterando sobre os dados dos cards e gerando elementos HTML para cada um

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

// Função para abrir o popup ao clicar na imagem do card

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

// Adicionando evento de clique ao botão de adicionar para exibir o formulário de criação

addButton.addEventListener('click', function () {
  create.classList.toggle('create-active');
  create.classList.toggle('create');
  formCreateValidator.resetValidation();
});

// Adicionando evento de clique ao botão de criação no formulário de criação

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

// Adicionando evento de clique ao botão de saída no formulário de criação

exitButton.addEventListener('click', function () {
  event.preventDefault();
  create.classList.remove('create-active');
  create.classList.add('create');
});

// Configuração para validação de formulários

const formValidatorConfig = {
  formSelector: '.form, .create',
  inputSelector: '.form__name, .form__info, .create__name, .create__info',
  submitButtonSelector: '.button__save, .button__create',
  inactiveButtonClass: 'button__save-off, button__create-off',
  inputErrorClass: 'input-invalid',
  errorSelector: '.span',
};

// Criando instâncias de FormValidator para os formulários de edição e criação

const formEditValidator = new FormValidator(formValidatorConfig, document.querySelector('.form'));
formEditValidator.enableValidation();

const formCreateValidator = new FormValidator(formValidatorConfig, document.querySelector('.create'));
formCreateValidator.enableValidation();

// Adicionando um evento de escuta ao teclado para manipulação de eventos

document.addEventListener('keydown', (event) => {
  handleKeydownEvent(event, form, create, popup);
});