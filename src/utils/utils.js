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

// Exporta as funções handleKeydownEvent e openPopup para uso externo
export { handleKeydownEvent, openPopup };
