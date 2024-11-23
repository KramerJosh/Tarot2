const cardDisplayEl = document.getElementById("cardDisplay")
const cardImage1El = document.getElementById("cardImage1")
const cardImage2El = document.getElementById("cardImage2")
const cardImage3El = document.getElementById("cardImage3")



const button1El = document.getElementById("button1")

Deck = [
    {cardName: "The Fool", cardNum: 0, cardImage: "./assets/images/00_major_arcana_fool.png"},
    {cardName: "The Magician", cardNum: 1, cardImage: "./assets/images/01_major_arcana_magician.png"},
    {cardName: "The High Priestess", cardNum: 2, cardImage: "./assets/images/02_major_arcana_priestess.png"},
    {cardName: "The Empress", cardNum: 3, cardImage: "./assets/images/03_major_arcana_empress.png"},
    {cardName: "The Emperor", cardNum: 4, cardImage: "./assets/images/04_major_arcana_emperor.png"},
    {cardName: "The Heirophant", cardNum: 5, cardImage: "./assets/images/05_major_arcana_hierophant.png"},
    {cardName: "The Lovers", cardNum: 6, cardImage: "./assets/images/06_major_arcana_lovers.png"},
    {cardName: "The Chariot", cardNum: 7, cardImage: "./assets/images/07_major_arcana_chariot.png"},
    {cardName: "Strength", cardNum: 8, cardImage: "./assets/images/08_major_arcana_justice.png"},
    {cardName: "The Hermit", cardNum: 9, cardImage: "./assets/images/09_major_arcana_hermit.png"},
    {cardName: "Wheel of Fortune", cardNum: 10, cardImage: "./assets/images/10_major_arcana_fortune.png"},
    {cardName: "Justice", cardNum: 11, cardImage: "./assets/images/11_major_arcana_strength.png"},
    {cardName: "The Hanged Man", cardNum: 12, cardImage: "./assets/images/12_major_arcana_hanged.png"},
    {cardName: "Death", cardNum: 13, cardImage: "./assets/images/13_major_arcana_death.png"},
    {cardName: "Temperance", cardNum: 14, cardImage: "./assets/images/14_major_arcana_temperance.png"},
    {cardName: "The Devil", cardNum: 15, cardImage: "./assets/images/15_major_arcana_devil.png"},
    {cardName: "The Tower", cardNum: 16, cardImage: "./assets/images/16_major_arcana_tower.png"},
    {cardName: "The Star", cardNum: 17, cardImage: "./assets/images/17_major_arcana_star.png"},
    {cardName: "The Moon", cardNum: 18, cardImage: "./assets/images/18_major_arcana_moon.png"},
    {cardName: "The Sun", cardNum: 19, cardImage: "./assets/images/19_major_arcana_sun.png"},
    {cardName: "Judgement", cardNum: 20, cardImage: "./assets/images/20_major_arcana_judgement.png"},
    {cardName: "The World", cardNum: 21, cardImage: "./assets/images/21_major_arcana_world.png"},
]

const shuffleDeck = (deck) => {
    // Fisher-Yates shuffle-in-place
    for (i = deck.length - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i+1));
        [deck[i], deck[newIndex]] = [deck[newIndex], deck[i]];
    }
    return deck
}


// There's gotta be a way to take drawNum and have that apply to which element I select.
const displayCard = (drawNum) => {
    if (drawNum === 0) {
        cardImage1El.classList.add("fade-out");
        setTimeout(function() {
        cardImage1El.src = Deck[0].cardImage;
        cardImage1El.classList.remove("fade-out")
        cardImage1El.style.opacity = 0;
        setTimeout(function() {
            cardImage1El.style.opacity = 1;
        }, 10);
          }, 1000);
    }


    else if (drawNum === 1) {
        cardImage2El.classList.add("fade-out");
        setTimeout(function() {
        cardImage2El.src = Deck[1].cardImage;
        cardImage2El.classList.remove("fade-out")
        cardImage2El.style.opacity = 0;
        setTimeout(function() {
            cardImage2El.style.opacity = 1;
        }, 10);
          }, 1000);
    }

    else if (drawNum === 2) {
        cardImage3El.classList.add("fade-out");
        setTimeout(function() {
        cardImage3El.src = Deck[2].cardImage;
        cardImage3El.classList.remove("fade-out")
        cardImage3El.style.opacity = 0;
        setTimeout(function() {
            cardImage3El.style.opacity = 1;
        }, 10);
          }, 1000);
    }
}

const clearCards = () => {
    cardImage1El.style.removeProperty('opacity');
    cardImage2El.style.removeProperty('opacity');
    cardImage3El.style.removeProperty('opacity');
}


button1El.addEventListener('click', function () {
    clearCards()
    shuffleDeck(Deck)

    setTimeout(function() {
        displayCard(0)
    }, 500)
    setTimeout(function() {
        displayCard(1)
    }, 1500)
    setTimeout(function() {
        displayCard(2)
    }, 2500)


})


