//botão de edição

const editButton = document.querySelector(".button__edit");

editButton.addEventListener("click", function() {
    form.style.display = "flex";
});

//botão para fechar o formulário

const closeButton = document.querySelector(".button__close");

closeButton.addEventListener("click", function() {
    event.preventDefault();
    form.style.display = "none";
});

//botão para salvar, alterando as informações do formulário

const saveButton = document.querySelector(".button__save");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".form__name");
const infoInput = document.querySelector(".form__info");
const nameData = document.querySelector(".data__name");
const infoData = document.querySelector(".data__info");

saveButton.addEventListener("click", function() {
    event.preventDefault();
    const newName = nameInput.value;
    const newInfo = infoInput.value;
    nameData.textContent = newName;
    infoData.textContent = newInfo;
    form.style.display = "none";
});

//botão de like

const heartButton = document.querySelector(".button__heart");
const heartBlack = document.querySelectorAll(".heart__black");

heartButton.addEventListener("click", function() {
    if (heartBlack.getAttribute("src") === "./images/heart.svg") {
        heartBlack.setAttribute("src", "./images/blackheart.svg");
    } else {
        heartBlack.setAttribute("src", "./images/heart.svg");
    }
});