// template inicial dos cards

export const cardsData = [
    {
      src: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      alt: "Vale de Yosemite",
      title: "Vale de Yosemite",
    },
    {
      src: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      alt: "Lago Louise",
      title: "Lago Louise",
    },
    {
      src: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
      alt: "Montanhas Carecas",
      title: "Montanhas Carecas",
    },
    {
      src: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
      alt: "Latemar",
      title: "Latemar",
    },
    {
      src: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
      alt: "Parque Nacional de Vanoise",
      title: "Vanoise National Park",
    },
    {
      src: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
      alt: "Lago di Braies",
      title: "Lago di Braies",
    },
  ];

// Selecionando elementos do DOM

export const editButton = document.querySelector('.button__edit');
export const form = document.querySelector('.form');
export const saveButton = document.querySelector('.button__save');
export const nameForm = form.querySelector('.form__name');
export const infoForm = form.querySelector('.form__info');
export const nameData = document.querySelector('.data__name');
export const infoData = document.querySelector('.data__info');
export const closeButton = document.querySelector('.button__close');
export const cardTemplate = document.querySelector('#card-template');
export const cardContainer = document.querySelector('.cards');
export const popup = document.querySelector('.popup');
export const addButton = document.querySelector('.button__add');
export const create = document.querySelector('.create');
export const createButton = document.querySelector('.button__create');
export const nameCreate = document.querySelector('.create__name');
export const infoCreate = document.querySelector('.create__info');
export const exitButton = document.querySelector('.button__exit');
