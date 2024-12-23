const duration = 5; // Duration of chords in seconds

// Create the Web Audio API context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to create and play a note using Web Audio API
function playNote(midiNote, startTime, duration) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  // Convert MIDI note to frequency
  const frequency = midiToFrequency(midiNote);

  // Set up the oscillator
  oscillator.type = "square"; // Choose waveform (sine, square, sawtooth, etc.)
  oscillator.frequency.setValueAtTime(frequency, startTime);

  // Connect the oscillator to the gain (volume control) and to the audio context destination
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // Set up the gain (volume control)
  gainNode.gain.setValueAtTime(0.01, startTime); // Set volume (0 to 1)

  // Start and stop the oscillator
  oscillator.start(startTime);
  oscillator.stop(startTime + duration); // Stop after the duration

  // Optional: fade out the note by decreasing the volume over time
  gainNode.gain.exponentialRampToValueAtTime(
    0.00001,
    startTime + duration - 0.05
  );
}

// Convert MIDI note number to frequency in Hz
function midiToFrequency(midiNote) {
  return 440 * Math.pow(2, (midiNote - 69) / 12);
}

// Function to play the chord
function playChord(drawNum) {
  chordNotes = Deck[drawNum].cardChord;
  const startTime = audioContext.currentTime; // Use the current time in the audio context

  // Play each note in the chord
  chordNotes.forEach((note) => {
    playNote(note, startTime, duration);
  });
}

// Trigger the playChord function on a click
document.querySelector("body").addEventListener("click", playChord);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const cardDisplayEl = document.getElementById("cardDisplay");
const cardImage1El = document.getElementById("cardImage0");
const cardImage2El = document.getElementById("cardImage1");
const cardImage3El = document.getElementById("cardImage2");

const button1El = document.getElementById("button1");

Deck = [
  {
    cardName: "The Fool",
    cardNum: 0,
    cardImage: "./assets/images/00_major_arcana_fool.png",
    cardChord: [60, 64, 67], //CMaj
  },
  {
    cardName: "The Magician",
    cardNum: 1,
    cardImage: "./assets/images/01_major_arcana_magician.png",
    cardChord: [67, 71, 74], //GMaj
  },
  {
    cardName: "The High Priestess",
    cardNum: 2,
    cardImage: "./assets/images/02_major_arcana_priestess.png",
    cardChord: [69, 72, 76], //Amin
  },
  {
    cardName: "The Empress",
    cardNum: 3,
    cardImage: "./assets/images/03_major_arcana_empress.png",
    cardChord: [65, 69, 72], //FMaj
  },
  {
    cardName: "The Emperor",
    cardNum: 4,
    cardImage: "./assets/images/04_major_arcana_emperor.png",
    cardChord: [62, 66, 69], //DMaj
  },
  {
    cardName: "The Heirophant",
    cardNum: 5,
    cardImage: "./assets/images/05_major_arcana_hierophant.png",
    cardChord: [70, 74, 77], //BbMaj
  },
  {
    cardName: "The Lovers",
    cardNum: 6,
    cardImage: "./assets/images/06_major_arcana_lovers.png",
    cardChord: [64, 68, 71], //EMaj
  },
  {
    cardName: "The Chariot",
    cardNum: 7,
    cardImage: "./assets/images/07_major_arcana_chariot.png",
    cardChord: [60, 63, 67], //Cmin
  },
  {
    cardName: "Strength",
    cardNum: 8,
    cardImage: "./assets/images/08_major_arcana_justice.png",
    cardChord: [65, 68, 72], //Fmin
  },
  {
    cardName: "The Hermit",
    cardNum: 9,
    cardImage: "./assets/images/09_major_arcana_hermit.png",
    cardChord: [64, 67, 71], //Emin
  },
  {
    cardName: "Wheel of Fortune",
    cardNum: 10,
    cardImage: "./assets/images/10_major_arcana_fortune.png",
    cardChord: [69, 73, 76], //AMaj
  },
  {
    cardName: "Justice",
    cardNum: 11,
    cardImage: "./assets/images/11_major_arcana_strength.png",
    cardChord: [71, 74, 78], //Bmin
  },
  {
    cardName: "The Hanged Man",
    cardNum: 12,
    cardImage: "./assets/images/12_major_arcana_hanged.png",
    cardChord: [62, 65, 69], //Dmin
  },
  {
    cardName: "Death",
    cardNum: 13,
    cardImage: "./assets/images/13_major_arcana_death.png",
    cardChord: [67, 70, 74], //Gmin
  },
  {
    cardName: "Temperance",
    cardNum: 14,
    cardImage: "./assets/images/14_major_arcana_temperance.png",
    cardChord: [68, 72, 75], //AbMaj
  },
  {
    cardName: "The Devil",
    cardNum: 15,
    cardImage: "./assets/images/15_major_arcana_devil.png",
    cardChord: [63, 67, 70], //EbMaj
  },
  {
    cardName: "The Tower",
    cardNum: 16,
    cardImage: "./assets/images/16_major_arcana_tower.png",
    cardChord: [66, 69, 73], //F#min
  },
  {
    cardName: "The Star",
    cardNum: 17,
    cardImage: "./assets/images/17_major_arcana_star.png",
    cardChord: [61, 65, 68], //C#Maj
  },
  {
    cardName: "The Moon",
    cardNum: 18,
    cardImage: "./assets/images/18_major_arcana_moon.png",
    cardChord: [66, 70, 73], //F#Maj
  },
  {
    cardName: "The Sun",
    cardNum: 19,
    cardImage: "./assets/images/19_major_arcana_sun.png",
    cardChord: [62, 66, 69], //DMaj
  },
  {
    cardName: "Judgement",
    cardNum: 20,
    cardImage: "./assets/images/20_major_arcana_judgement.png",
    cardChord: [71, 75, 78], //BMaj
  },
  {
    cardName: "The World",
    cardNum: 21,
    cardImage: "./assets/images/21_major_arcana_world.png",
    cardChord: [70, 74, 77], //A#Maj
  },
];

const shuffleDeck = (deck) => {
  // Fisher-Yates shuffle-in-place
  for (i = deck.length - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[newIndex]] = [deck[newIndex], deck[i]];
  }
  return deck;
};

const coinFlip = () => {
  headsOrTails = Math.round(Math.random());
  return headsOrTails ? 'upright' : 'reversed'; 
};

// There's gotta be a way to take drawNum and have that apply to which element I select.
const displayCard = (drawNum) => {
  playChord(drawNum);
  isUpright = coinFlip();
  var cardImageX = document.getElementById(`cardImage${drawNum}`)
 
    cardImageX.classList.add("fade-out");
    setTimeout(function () {
        console.log(isUpright);
    if (isUpright === "reversed") {
        cardImageX.classList.add('reversed');
    }
    else if (isUpright === "upright") {
        cardImageX.classList.remove('reversed');
    }
    cardImageX.src = Deck[drawNum].cardImage;
    cardImageX.classList.remove("fade-out");
      cardImageX.style.opacity = 0;
      setTimeout(function () {
        cardImageX.style.opacity = 1;
      }, 10);
    }, 1000);
}

// This function allows the fade in to work after the first time it's called
const clearCards = () => {
  cardImage1El.style.removeProperty("opacity");
  cardImage2El.style.removeProperty("opacity");
  cardImage3El.style.removeProperty("opacity");
};

button1El.addEventListener("click", function () {
  clearCards();
  shuffleDeck(Deck);

  setTimeout(function () {
    displayCard(0);
  }, 500);
  setTimeout(function () {
    displayCard(1);
  }, 1500);
  setTimeout(function () {
    displayCard(2);
  }, 2500);
});

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//TODO
// Add some text for each inversion
// Add chords for reversed
// Add a weight to each card and inversion to be used to change color theme of page
// Add onlick modals to each card with more information

// Add different decks
// Try to use Difference of Gaussians to edge detect/ create some wireframe effects
