// Manipulador de eventos de teclado
function handleKeydownEvent(event, form, create, popup) {
  if (event.key === "Escape") {
    // Fechar o form
    if (form.classList.contains("form-active")) {
      event.preventDefault();
      form.classList.remove("form-active");
    }
  
    // Fechar o create
    if (create.classList.contains("create-active")) {
      event.preventDefault();
      create.classList.remove("create-active");
      create.classList.add("create");
    }
  
    // Fechar o popup
    if (popup.classList.contains("popup-active")) {
      event.preventDefault();
      popup.classList.remove("popup-active");
    }
  }
};

// Função para abrir e fechar o popup
function openPopup(src, imageTitle) {
  const popup = document.querySelector(".popup");
  const popupImage = popup.querySelector(".popup__image");
  const popupTitle = popup.querySelector(".popup__title");
  const popupButton = document.querySelector(".button__popup");
  
  // Verifique se o popup já está aberto
  const isOpen = popup.classList.contains("popup-active");
  
  popupImage.src = src;
  popupTitle.textContent = imageTitle;
  
  if (isOpen) {
    popup.classList.remove("popup-active");
  } else {
    popup.classList.add("popup-active");
  
    // Adicionando tratamento de evento para o botão quando o popup é aberto
    popupButton.addEventListener("click", () => {
      popup.classList.remove("popup-active");
    });
  }
}


export {handleKeydownEvent, openPopup};