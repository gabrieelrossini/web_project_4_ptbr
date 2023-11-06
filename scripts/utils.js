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

export {handleKeydownEvent}