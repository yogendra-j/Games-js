document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "1",
      img: "images/1.png",
    },
    {
      name: "1",
      img: "images/1.png",
    },
    {
      name: "2",
      img: "images/2.png",
    },
    {
      name: "2",
      img: "images/2.png",
    },
    {
      name: "3",
      img: "images/3.png",
    },
    {
      name: "3",
      img: "images/3.png",
    },
    {
      name: "4",
      img: "images/4.png",
    },
    {
      name: "4",
      img: "images/4.png",
    },
    {
      name: "5",
      img: "images/5.png",
    },
    {
      name: "5",
      img: "images/5.png",
    },
    {
      name: "6",
      img: "images/6.png",
    },
    {
      name: "6",
      img: "images/6.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create board
  const creatBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  };

  //   check for match
  const checkForMatch = () => {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
    }
    cardsChosenId = [];
    cardsChosen = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations";
      document.body.style.background = "blue";
    }
  };

  //flip card
  function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  creatBoard();
});
