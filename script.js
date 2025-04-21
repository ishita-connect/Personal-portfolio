const typingDiv = document.getElementById("typing");
const text = typingDiv.textContent;
let index = 0;

typingDiv.textContent = ""; // Clear original text

function typeLetterByLetter() {
  if (index < text.length) {
    typingDiv.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetterByLetter, 50); // Typing speed (50ms per letter)
  }
}

typeLetterByLetter();
const typingDiv2 = document.getElementById("typing2");
const text2 = typingDiv2.textContent;
let index2 = 0;

typingDiv2.textContent = ""; // Clear original text

function typeLetterByLetter2() {
  if (index2 < text.length) {
    typingDiv2.textContent += text.charAt(index);
    index2++;
    setTimeout(typeLetterByLetter2, 50); // Typing speed (50ms per letter)
  }
}

typeLetterByLetter2();
