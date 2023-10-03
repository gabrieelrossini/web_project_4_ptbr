// Seletores botão edit
const editButton = document.querySelector(".button__edit");
const form = document.querySelector(".form");

// Seletores botão save
const saveButton = document.querySelector(".button__save");
const nameForm = document.querySelector(".form__name");
const infoForm = document.querySelector(".form__info");
const nameData = document.querySelector(".data__name");
const infoData = document.querySelector(".data__info");

// Checando se a classe "form-active" está presente
const formActive = document.querySelector(".form-active");

// Função de validação botão save
function validateFields() {
  const isNameValid = nameForm.checkValidity();
  const isInfoValid = infoForm.checkValidity();

  saveButton.classList.toggle(
    "button__save-off",
    !(isNameValid && isInfoValid)
  );
}

// Efeito de clique no botão edit
editButton.addEventListener("click", function () {
  form.classList.add("form-active");
});

// Efeito de clique no botão save
saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (nameForm.checkValidity() && infoForm.checkValidity()) {
    const newName = nameForm.value;
    const newInfo = infoForm.value;
    nameData.textContent = newName;
    infoData.textContent = newInfo;
    form.classList.remove("form-active");
  }
});

// Efeito de clique no botão close
const closeButton = document.querySelector(".button__close");

closeButton.addEventListener("click", function () {
  event.preventDefault();
  form.classList.remove("form-active");
});

// Manipulador de eventos de teclado
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // Fechar o form
    if (form.classList.contains("form-active")) {
      form.classList.remove("form-active");
    }

    // Fechar o create
    if (create.classList.contains("create-active")) {
      create.classList.remove("create-active");
      create.classList.add("create");
    }
  }
});

// Manipuladores de eventos de input
nameForm.addEventListener("input", validateFields);
infoForm.addEventListener("input", validateFields);

//template cards

const cardTemplate = document.querySelector("#card-template");
const cardContainer = document.querySelector(".cards");
const cardsData = [
  {
    src: "./images/yosemite.jpg",
    alt: "Vale de Yosemite",
    title: "Vale de Yosemite",
  },

  {
    src: "./images/louise.jpg",
    alt: "Lago Louise",
    title: "Lago Louise",
  },

  {
    src: "./images/montanhas.jpg",
    alt: "Montanhas Carecas",
    title: "Montanhas Carecas",
  },

  {
    src: "./images/latemar.jpg",
    alt: "Latemar",
    title: "Latemar",
  },

  {
    src: "./images/vanoise.jpg",
    alt: "Parque Nacional de Vanoise",
    title: "Vanoise National Park",
  },

  {
    src: "./images/braies.jpg",
    alt: "Lago di Braies",
    title: "Lago di Braies",
  },
];

function addHeartEvent(card) {
  const buttonHeart = card.querySelector(".button__heart");

  buttonHeart.addEventListener("click", () => {
    buttonHeart.classList.toggle("button__heart-active");
  });
}

// conteúdo dos cards

cardsData.forEach((data) => {
  const card = cardTemplate.content.cloneNode(true);

  const image = card.querySelector(".card__image");
  image.src = data.src;
  image.alt = data.alt;

  image.addEventListener("click", handleImageClick);

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

//seletores botão add

const addButton = document.querySelector(".button__add");
const create = document.querySelector(".create");

//efeito de click botão add

addButton.addEventListener("click", function () {
  create.classList.toggle("create-active");
  create.classList.toggle("create");
});

// Seletores dos botões "Create"
const createButton = document.querySelector(".button__create");
const nameCreate = document.querySelector(".create__name");
const infoCreate = document.querySelector(".create__info");

// Função de validação dos campos
function validateCreateFields() {
  const isNameValid = nameCreate.checkValidity();
  const isInfoValid = infoCreate.checkValidity();

  createButton.classList.toggle(
    "button__create-off",
    !(isNameValid && isInfoValid)
  );
}

// Evento de input nos campos "Título" e "URL da imagem"
nameCreate.addEventListener("input", validateCreateFields);
infoCreate.addEventListener("input", validateCreateFields);

// Evento de clique do botão "Create"
createButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Verifica se os campos são válidos
  if (!nameCreate.checkValidity() || !infoCreate.checkValidity()) {
    return; // Sai precocemente se os campos não forem válidos
  }

  // Criação do card
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

  addHeartEvent(card); // Adiciona o evento de clique no coração

  addClickEventToImage(card); // Adiciona o evento de clique na imagem

  cardContainer.appendChild(card);

  nameCreate.value = "";
  infoCreate.value = "";

  create.classList.toggle("create-active");
  create.classList.toggle("create");
});

// Função de clique na imagem
function addClickEventToImage(card) {
  const image = card.querySelector(".card__image");
  image.addEventListener("click", handleImageClick);
}

function handleImageClick(e) {
  const image = e.currentTarget;
  const src = image.src;
  const imageTitle = image.alt;
  openPopup(src, imageTitle);
}

// Função para abrir popup
function openPopup(src, imageTitle) {
  const popup = document.querySelector(".popup");
  const closeBtn = document.querySelector(".button__popup");

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("popup-active");
  });

  const popupImage = popup.querySelector(".popup__image");
  const popupTitle = popup.querySelector(".popup__title");

  popupImage.src = src;
  popupTitle.textContent = imageTitle;

  popup.classList.add("popup-active");
}

//botão exit ativo

const exitButton = document.querySelector(".button__exit");

exitButton.addEventListener("click", function () {
  event.preventDefault();
  create.classList.toggle("create-active");
  create.classList.toggle("create");
});
