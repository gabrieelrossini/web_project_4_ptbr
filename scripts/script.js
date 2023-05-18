const editButton = document.querySelector(".button__edit");
const closeButton = document.querySelector(".button__close");
const saveButton = document.querySelector(".button__save");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".form__name");
const infoInput = document.querySelector(".form__info");
const nameData = document.querySelector(".data__name");
const infoData = document.querySelector(".data__info");

editButton.addEventListener("click", function() {
    form.style.display = "flex";
});

closeButton.addEventListener("click", function() {
    event.preventDefault();
    form.style.display = "none";
});

saveButton.addEventListener("click", function() {
    event.preventDefault();
    const newName = nameInput.value;
    const newInfo = infoInput.value;
    nameData.textContent = newName;
    infoData.textContent = newInfo;
    form.style.display = "none";
});