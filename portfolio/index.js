const phrases = ['Front-end Developer', 'Back-end Engineer', 'Mobile developer', 'Full Stack Developer'];
const typingSpeed = 100;

let phraseIndex = 0;
let charIndex = 0;
const typingEffect = document.getElementById('typing-effect');

function typeText() {
    if (phraseIndex < phrases.length) {
        const currentPhrase = phrases[phraseIndex];
        if (charIndex < currentPhrase.length) {
            typingEffect.textContent += currentPhrase.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            // Delay before erasing
            setTimeout(eraseText, 500);
        }
    } else {
        // Restart typing effect
        phraseIndex = 0;
        charIndex = 0;
        typingEffect.textContent = '';
        setTimeout(typeText, typingSpeed);
    }
}

function eraseText() {
    const currentPhrase = phrases[phraseIndex];
    if (charIndex > 0) {
        typingEffect.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, typingSpeed);
    } else {
        // Move to next phrase
        phraseIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

function addCursor() {
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'cursor';
    typingEffect.appendChild(cursorSpan);
}

function removeCursor() {
    const cursorSpan = document.querySelector('.cursor');
    if (cursorSpan) {
        typingEffect.removeChild(cursorSpan);
    }
}

addCursor();
typeText();

const dateNow = document.getElementById('date-now');
const now = new Date();

dateNow.textContent = now.getFullYear();
dateNow.classList.add('text-md');
