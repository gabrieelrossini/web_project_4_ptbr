//botão edit ativo

const editButton = document.querySelector(".button__edit");
const form = document.querySelector(".form");
const formActive = document.querySelector(".form-active");

editButton.addEventListener("click", function() {
form.classList.toggle("form-active");
form.classList.toggle("form");
});

//botão save ativo, alterando as informações do formulário

const saveButton = document.querySelector(".button__save");
const nameForm = document.querySelector(".form__name");
const infoForm = document.querySelector(".form__info");
const nameData = document.querySelector(".data__name");
const infoData = document.querySelector(".data__info");

saveButton.addEventListener("click", function() {
event.preventDefault();
const newName = nameForm.value;
const newInfo = infoForm.value;
nameData.textContent = newName;
infoData.textContent = newInfo;
form.classList.toggle("form-active");
form.classList.toggle("form");
});

//botão close ativo

const closeButton = document.querySelector(".button__close");

closeButton.addEventListener("click", function() {
event.preventDefault();
form.classList.toggle("form-active");
form.classList.toggle("form");
});

//template cards

const cardTemplate = document.querySelector("#card-template");
const cardContainer = document.querySelector(".cards");
const cardsData = [
{
src:"./images/yosemite.jpg",
alt:"retrato fotográfico do Vale de Yosemite",
title: "Vale de Yosemite"

},

{
src:"./images/louise.jpg",
alt:"retrato fotográfico do Lago Louise",
title: "Lago Louise"
},

{
src:"./images/montanhas.jpg",
alt:"retrato fotográfico das Montanhas Carecas",
title: "Montanhas Carecas"
},

{
src:"./images/latemar.jpg",
alt:"retrato fotográfico de Latemar",
title: "Latemar"
},

{
src:"./images/vanoise.jpg",
alt:"retrato fotográfico do Parque Nacional de Vanoise",
title: "Vanoise National Park"
},

{
src:"./images/braies.jpg",
alt:"retrato fotográfico do Lago de Braies",
title: "Lago di Braies"
},
];

function addHeartEvent(card) {
const buttonHeart = card.querySelector(".button__heart");

buttonHeart.addEventListener("click", () => {
buttonHeart.classList.toggle("button__heart-active");
});
}

// conteúdo dos cards

cardsData.forEach(data => {

const card = cardTemplate.content.cloneNode(true);
    
const image = card.querySelector(".card__image");
image.src = data.src;
image.alt = data.alt;
    
image.addEventListener('click', handleImageClick);
    
const cardTitle = card.querySelector(".card__title");
cardTitle.textContent = data.title;
    
const buttonTrash = document.createElement("button");
buttonTrash.classList.add("button__trash");
card.querySelector(".card").appendChild(buttonTrash);
    
buttonTrash.addEventListener("click", () => {
buttonTrash.closest(".card").remove();
});
    
addHeartEvent(card);
    
cardContainer.appendChild(card);
    
});
    
// Função de clique na imagem
function handleImageClick(e) {
    
const image = e.currentTarget;
    
const src = image.src;
const imageTitle = image.title;
    
openPopup(src, imageTitle);
    
}
    
// Função para abrir popup
function openPopup(src, imageTitle){
    
const popup = document.querySelector('.popup');
    
const closeBtn = document.querySelector('.button__popup');
    
closeBtn.addEventListener('click', () => {
popup.classList.remove('popup-active');
});
    
const popupImage = popup.querySelector('.popup__image');
const popupTitle = popup.querySelector('.popup__title');
    
popupImage.src = src;
popupTitle.textContent = imageTitle;
    
popup.classList.add('popup-active');
    
}
  

//botão add ativo

const addButton = document.querySelector(".button__add");
const create = document.querySelector(".create");

addButton.addEventListener("click", function() {
create.classList.toggle("create-active");
create.classList.toggle("create");
});

//botão create ativo

const createButton = document.querySelector(".button__create");
const nameCreate = document.querySelector(".create__name");
const infoCreate = document.querySelector(".create__info");

createButton.addEventListener("click", function(event) {

event.preventDefault();
const name = nameCreate.value;
const imageSrc = infoCreate.value;
const card = cardTemplate.content.cloneNode(true);

const title = card.querySelector(".card__title");
title.textContent = name;

const image = card.querySelector(".card__image");
image.src = imageSrc;
image.alt = name;

const buttonTrash = document.createElement("button");
buttonTrash.classList.add("button__trash");
card.querySelector(".card").appendChild(buttonTrash);

buttonTrash.addEventListener("click", () => {
buttonTrash.closest(".card").remove();
});

addHeartEvent(card);

cardContainer.appendChild(card);

nameCreate.value = "";
infoCreate.value = "";

create.classList.toggle("create-active");
create.classList.toggle("create");

});

//botão exit ativo

const exitButton = document.querySelector(".button__exit");

exitButton.addEventListener("click", function() {
event.preventDefault();
create.classList.toggle("create-active");
create.classList.toggle("create");
});