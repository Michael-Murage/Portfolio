const phrases = ['Front-end Engineer', 'Web developer', 'Front-end developer', 'Full Stack Engineer'];
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

/* Carousel setup */
const slides1 = document.querySelectorAll('.carousel-slide1');
const slides2 = document.querySelectorAll('.carousel-slide2');
const slides3 = document.querySelectorAll('.carousel-slide3');
let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

function showSlide1(idx) {
    slides1.forEach(slide => {
        slide.classList.remove('active')
        slide.classList.remove('slide-right-to-left-animation');
    });
    slides1[idx].classList.add('active');
    slides1[idx].classList.add('slide-right-to-left-animation');
}

function nextSlide1() {
  currentIndex1++;
  if (currentIndex1 >= slides1.length) {
    currentIndex1 = 0;
  }
  showSlide1(currentIndex1);
}

setInterval(nextSlide1, 4000);

function showSlide2(idx) {
    slides2.forEach(slide => {
        slide.classList.remove('active')
        slide.classList.remove('slide-right-to-left-animation');
    });
    slides2[idx].classList.add('active');
    slides2[idx].classList.add('slide-right-to-left-animation');
}

function nextSlide2() {
    currentIndex2++;
    if (currentIndex2 >= slides2.length) {
      currentIndex2 = 0;
    }
    showSlide2(currentIndex2);
}

setInterval(nextSlide2, 4000);

function showSlide3(idx) {
    slides3.forEach(slide => {
        slide.classList.remove('active')
        slide.classList.remove('slide-right-to-left-animation');
    });
    slides3[idx].classList.add('active');
    slides3[idx].classList.add('slide-right-to-left-animation');
}

function nextSlide3() {
    currentIndex3++;
    if (currentIndex3 >= slides3.length) {
      currentIndex3 = 0;
    }
    showSlide3(currentIndex3);
}

setInterval(nextSlide3, 4000);
