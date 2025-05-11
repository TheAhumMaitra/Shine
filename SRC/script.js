// typewriter effect for mom section
const texts = [
  "my Mom ❤️ and dad",
  "Harry Potter",
  "Magical World",
  "Rain and strom",
  "CS50",
  "Programming world!",
  "Queens of Tears and it's OST",
  "Songs",
  "love",
  "ChatGPT",
  "Nature 🌿",
  "Life ✨",
  "Dreams 🌈",
  "you!",
];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;

let textIndex = 0;
let charIndex = 0;

const typedTextSpan = document.getElementById("typed-text");

function type() {
  if (charIndex < texts[textIndex].length) {
    typedTextSpan.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex++;
    if (textIndex >= texts.length) textIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, delayBetweenTexts);
});

// #search 
document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const sections = document.querySelectorAll(".searchable");

  sections.forEach((section) => {
    const text = section.innerText.toLowerCase();
    if (text.includes(query)) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
});
