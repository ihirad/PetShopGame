let body = document.querySelector("body");
let cardsContainer = document.querySelector("#cards-container");

let pets = [
  { id: 1, name: "Buddy", emoji: "🐕", epitaph: "Forever Our Loyal Companion" },
  { id: 2, name: "Luna", emoji: "🐈", epitaph: "Our Beloved Moonlight Shadow" },
  { id: 3, name: "Max", emoji: "🦜", epitaph: "A True Friend with Wings" },
  {
    id: 4,
    name: "Bella",
    emoji: "🐰",
    epitaph: "Hopping into Our Hearts Forever",
  },
  { id: 5, name: "Charlie", emoji: "🐠", epitaph: "Swimming in Our Memories" },
  { id: 6, name: "Daisy", emoji: "🐹", epitaph: "Small in Size, Big in Love" },
  { id: 7, name: "Rocky", emoji: "🦎", epitaph: "Our Little Rock Star" },
  {
    id: 8,
    name: "Molly",
    emoji: "🦔",
    epitaph: "Forever Spinning the Wheel of Our Hearts",
  },
  {
    id: 9,
    name: "Oliver",
    emoji: "🐢",
    epitaph: "Slowly Wandered into Heaven",
  },
  {
    id: 10,
    name: "Sadie",
    emoji: "🐍",
    epitaph: "Eternally Slithering in Our Hearts",
  },
  {
    id: 11,
    name: "Lucy",
    emoji: "🦗",
    epitaph: "Chirping in the Eternal Fields",
  },
  {
    id: 12,
    name: "Oscar",
    emoji: "🦞",
    epitaph: "A Pinch of Love Lasts Forever",
  },
  {
    id: 13,
    name: "Coco",
    emoji: "🦜",
    epitaph: "Colorful in Life, Beautiful in Memory",
  },
  {
    id: 14,
    name: "Stella",
    emoji: "🐊",
    epitaph: "A Stellar Spirit, Never Forgotten",
  },
  { id: 15, name: "Gizmo", emoji: "🐀", epitaph: "Tiny Feet, Big Impact" },
  { id: 16, name: "Ruby", emoji: "🐍", epitaph: "Precious and Beloved" },
  { id: 17, name: "Jasper", emoji: "🦔", epitaph: "A Gem in Our Lives" },
  { id: 18, name: "Rosie", emoji: "🐢", epitaph: "Blossomed in Our Hearts" },
  {
    id: 19,
    name: "Leo",
    emoji: "🐕",
    epitaph: "A Brave Heart, Forever Remembered",
  },
  { id: 20, name: "Zoe", emoji: "🦎", epitaph: "Zoomed Right into Our Hearts" },
  {
    id: 21,
    name: "Penny",
    emoji: "🐈",
    epitaph: "Invaluable Moments, Forever Treasured",
  },
  { id: 22, name: "Harley", emoji: "🦜", epitaph: "Flying High in Our Dreams" },
  { id: 23, name: "Milo", emoji: "🐰", epitaph: "Hopped into the Skies" },
  { id: 24, name: "Sophie", emoji: "🐠", epitaph: "Our Little Sparkle" },
  {
    id: 25,
    name: "Toby",
    emoji: "🐹",
    epitaph: "Forever Pattering in Our Home",
  },
  {
    id: 26,
    name: "Lily",
    emoji: "🦔",
    epitaph: "Eternal Bloom in Our Garden of Love",
  },
  { id: 27, name: "Bailey", emoji: "🦎", epitaph: "A Beacon of Joy" },
  { id: 28, name: "Maggie", emoji: "🐢", epitaph: "Our Little Explorer" },
  {
    id: 29,
    name: "Jake",
    emoji: "🐍",
    epitaph: "Forever Sliding into Our Hearts",
  },
  {
    id: 30,
    name: "Dexter",
    emoji: "🦗",
    epitaph: "Our Little Detective in Heaven",
  },
  { id: 31, name: "Chloe", emoji: "🦞", epitaph: "A Touch of Grace" },
  { id: 32, name: "Jack", emoji: "🐕", epitaph: "Jack of All Hearts" },
  {
    id: 33,
    name: "Angel",
    emoji: "🐈",
    epitaph: "An Angelic Presence, Forever Missed",
  },
  { id: 34, name: "Teddy", emoji: "🐰", epitaph: "Our Cuddly Companion" },
  { id: 35, name: "Mia", emoji: "🐠", epitaph: "Swimming in the Stars" },
  { id: 36, name: "Loki", emoji: "🐹", epitaph: "Mischievously Loved" },
  { id: 37, name: "Izzy", emoji: "🦔", epitaph: "Irreplaceably Adorable" },
  { id: 38, name: "Finn", emoji: "🐢", epitaph: "Our Little Adventurer" },
  { id: 39, name: "Ziggy", emoji: "🐍", epitaph: "Zigzagging in Our Hearts" },
  { id: 40, name: "Baxter", emoji: "🦗", epitaph: "A Bounce of Happiness" },
  { id: 41, name: "Gracie", emoji: "🦞", epitaph: "Graceful in Every Way" },
  { id: 42, name: "Henry", emoji: "🐕", epitaph: "A King in Our Castle" },
  { id: 43, name: "Nala", emoji: "🐈", epitaph: "Our Royal Highness" },
  { id: 44, name: "Ollie", emoji: "🐰", epitaph: "Hopping Happily in Heaven" },
  {
    id: 45,
    name: "Sam",
    emoji: "🐠",
    epitaph: "Forever Swimming in Our Hearts",
  },
  { id: 46, name: "Ellie", emoji: "🐹", epitaph: "Eternally Loved and Missed" },
  { id: 47, name: "Hazel", emoji: "🦔", epitaph: "A Nutty and Loving Soul" },
  { id: 48, name: "Duke", emoji: "🐢", epitaph: "Royally Adored" },
  { id: 49, name: "Lola", emoji: "🐍", epitaph: "Dancing in Our Memories" },
  {
    id: 50,
    name: "Riley",
    emoji: "🦗",
    epitaph: "Rhythms of Joy in Our Hearts",
  },
];

pets.forEach((pet) => {
  pet.hunger = 0;
  pet.love = 100;
  pet.isAlive = true;
});

let currentPetIndex = 0;
let deadPetsCounter = 0;
let displayInterval = setInterval(displayPet, 5000);

function displayPet() {
  if (currentPetIndex < pets.length && pets.some((pet) => pet.isAlive)) {
    let pet = pets[currentPetIndex++];
    render(pet);
    setInterval(() => updatePetStats(pet), 1000);
  } else {
    clearInterval(displayInterval);
  }
}

function render(pet) {
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-containers");
  cardContainer.id = `pet-card-${pet.id}`;

  let petName = document.createElement("h2");
  petName.textContent = pet.name;
  petName.classList.add("petName");
  cardContainer.appendChild(petName);

  let petEmoji = document.createElement("h2");
  petEmoji.textContent = pet.emoji;
  petEmoji.classList.add("petEmoji");
  petEmoji.addEventListener("click", () => resetLove(pet.id));
  cardContainer.appendChild(petEmoji);

  let hungerBarOuter = document.createElement("div");
  hungerBarOuter.className = "hunger-bar-outer";
  let hungerBarInner = document.createElement("div");
  hungerBarInner.className = "hunger-bar-inner";
  hungerBarInner.id = `hunger-bar-${pet.id}`;
  hungerBarOuter.appendChild(hungerBarInner);
  cardContainer.appendChild(hungerBarOuter);

  let loveBarOuter = document.createElement("div");
  loveBarOuter.className = "love-bar-outer";
  let loveBarInner = document.createElement("div");
  loveBarInner.className = "love-bar-inner";
  loveBarInner.id = `love-bar-${pet.id}`;
  loveBarOuter.appendChild(loveBarInner);
  cardContainer.appendChild(loveBarOuter);

  let button = document.createElement("button");
  button.textContent = "Feed Me 🧆";
  button.onclick = () => resetHunger(pet.id);
  cardContainer.appendChild(button);

  cardsContainer.appendChild(cardContainer);
}

function updatePetStats(pet) {
  if (!pet.isAlive) return;

  pet.hunger = Math.min(100, pet.hunger + 1);
  pet.love = Math.max(0, pet.love - 1);

  updateProgressBar(pet);

  if (pet.hunger === 100 || pet.love === 0) {
    petDies(pet);
  }
}

function updateProgressBar(pet) {
  let hungerBar = document.getElementById(`hunger-bar-${pet.id}`);
  let loveBar = document.getElementById(`love-bar-${pet.id}`);

  if (hungerBar) hungerBar.style.width = `${pet.hunger}%`;
  if (loveBar) loveBar.style.width = `${pet.love}%`;
}

function petDies(pet) {
  pet.isAlive = false;
  deadPetsCounter++;

  let petCard = document.querySelector(`#pet-card-${pet.id}`);
  if (petCard) {
    petCard.replaceChildren();

    let petName = document.createElement("h2");
    petName.textContent = pet.name;
    petCard.appendChild(petName);

    let petEmoji = document.createElement("h2");
    petEmoji.textContent = pet.emoji;
    petCard.appendChild(petEmoji);

    let petEpitaph = document.createElement("p");
    petEpitaph.textContent = pet.epitaph;
    petCard.appendChild(petEpitaph);
  }
}

function resetHunger(petId) {
  let pet = pets.find((p) => p.id === petId);
  if (pet && pet.isAlive) {
    pet.hunger = 0;
    updateProgressBar(pet);
  }
}

function resetLove(petId) {
  let pet = pets.find((p) => p.id === petId);
  if (pet && pet.isAlive) {
    pet.love = 100;
    updateProgressBar(pet);
  }
}
