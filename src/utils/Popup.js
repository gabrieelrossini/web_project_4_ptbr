// Importando constantes

import {
  form,
  create,
  popup,
  editButton,
  saveButton,
  closeButton,
  nameForm,
  infoForm,
  nameData,
  infoData
} from './constants.js'

// Manipulador de eventos de teclado
function handleKeydownEvent(event, form, create, popup) {
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
function openPopup(src, imageTitle) {
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

// Exporta as funções handleKeydownEvent e openPopup para uso externo
export { handleKeydownEvent, openPopup };
