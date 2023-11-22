// Definição da classe Card
export default class Card {
  constructor(data, templateSelector) {
    this._data = data; // Armazena os dados do card
    this._templateSelector = templateSelector; // Seleciona o template do card
  }

  // Método privado para obter o template do card no DOM
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector) // Seleciona o elemento do template
      .content.querySelector(".card"); // Seleciona a estrutura do card no template
    return cardTemplate.cloneNode(true); // Retorna uma cópia do template
  }

  // Método privado para configurar os ouvintes de eventos
  _setEventListeners() {
    const buttonHeart = this._element.querySelector(".button__heart"); // Seleciona o botão de coração

    // Adiciona um ouvinte de evento de clique ao botão de coração
    buttonHeart.addEventListener("click", () => {
      buttonHeart.classList.toggle("button__heart-active"); // Alternância da classe para simular o "ativo"
    });
  }

  // Método público para gerar um novo card
  generateCard() {
    this._element = this._getTemplate(); // Obtém o template do card
    this._element.querySelector(".card__image").src = this._data.src; // Define a imagem do card
    this._element.querySelector(".card__image").alt = this._data.alt; // Define o texto alternativo da imagem
    this._element.querySelector(".card__title").textContent = this._data.title; // Define o título do card

    this._setEventListeners(); // Configura os ouvintes de eventos para o card

    return this._element; // Retorna o elemento do card
  }
}
