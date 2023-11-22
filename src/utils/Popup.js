// Importando constantes

import {
  cardsData,
  editButton,
  form,
  saveButton,
  nameForm,
  infoForm,
  nameData,
  infoData,
  closeButton,
  cardTemplate,
  cardContainer,
  popup,
  addButton,
  create,
  createButton,
  nameCreate,
  infoCreate,
  exitButton,
  formCreateValidator
} from './constants.js';

// Importando a classe Card

import Card from '../components/Card.js';


// Manipulador de eventos de teclado
export function handleKeydownEvent(event, form, create, popup) {
  // Verifica se a tecla pressionada é "Escape"
  if (event.key === "Escape") {
    // Fecha o formulário se estiver aberto
    if (form.classList.contains("form-active")) {
      event.preventDefault();
      form.classList.remove("form-active");
    }
  
    // Fecha o elemento "create" se estiver aberto
    if (create.classList.contains("create-active")) {
      event.preventDefault();
      create.classList.remove("create-active");
      create.classList.add("create");
    }
  
    // Fecha o popup se estiver aberto
    if (popup.classList.contains("popup-active")) {
      event.preventDefault();
      popup.classList.remove("popup-active");
    }
  }
}

// Função para abrir e fechar o popup
export function openPopup(src, imageTitle) {
  const popup = document.querySelector(".popup");
  const popupImage = popup.querySelector(".popup__image");
  const popupTitle = popup.querySelector(".popup__title");
  const popupButton = document.querySelector(".button__popup");
  
  // Verifica se o popup já está aberto
  const isOpen = popup.classList.contains("popup-active");
  
  popupImage.src = src;
  popupTitle.textContent = imageTitle;
  
  if (isOpen) {
    // Fecha o popup se estiver aberto
    popup.classList.remove("popup-active");
  } else {
    // Abre o popup se estiver fechado
    popup.classList.add("popup-active");
  
    // Adiciona um evento de clique ao botão para fechar o popup quando aberto
    popupButton.addEventListener("click", () => {
      popup.classList.remove("popup-active");
    });
  }
}

// Adicionando um evento de escuta ao teclado para manipulação de eventos

document.addEventListener('keydown', (event) => {
  handleKeydownEvent(event, form, create, popup);
});

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
