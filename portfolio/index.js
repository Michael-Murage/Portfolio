const title = 'Software Engineer';
const phrases = [
    'Front-end Development',
    'Back-end Development',
    'Database Design',
    'Database Administration',
    'Devops and Automation',
    'Architectural Scaling',
    'Application Optimisation',
];
const typingSpeed = 100;

let phraseIndex = 0;
let charIndex = 0;
let titleCharIndex = 0;
const typingEffect = document.getElementById('typing-effect');
const titleTypingEffect = document.getElementById('title-typing-effect');
const titleCursor = document.getElementsByClassName('cursor-title')[0];
const servicesCursor = document.getElementsByClassName('cursor')[0];
titleCursor?.classList?.add('cursor-animation');

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

function typeTitleText() {
    if (titleCharIndex < title.length) {
        titleTypingEffect.textContent += title.charAt(titleCharIndex);
        titleCharIndex++;
        setTimeout(typeTitleText, typingSpeed);
    } else {
        titleCursor?.classList?.remove('cursor-animation');
        servicesCursor?.classList?.add('cursor-animation');
        typeText();
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

function addCursor(effectClass) {
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'cursor';
    effectClass.appendChild(cursorSpan);
}

function removeCursor(effectClass) {
    const cursorSpan = document.querySelector('.cursor');
    if (cursorSpan) {
        effectClass.removeChild(cursorSpan);
    }
}

addCursor(titleTypingEffect);
addCursor(typingEffect);
typeTitleText();
// typeText();

const dateNow = document.getElementById('date-now');
const now = new Date();

dateNow.textContent = now.getFullYear();
dateNow.classList.add('text-md');
