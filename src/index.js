// Importando estilos CSS
import "./styles/index.css";

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
  exitButton } from './utils/constants.js';

// Importando funções e classes de utilidade

import { handleKeydownEvent, openPopup } from './utils/Popup.js';

// Importando a classe Card

import Card from './components/Card.js';

// Importando as regras de validação de formulário

import FormValidator from './components/FormValidator.js';