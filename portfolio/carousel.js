/* Carousel setup */
// const slides1 = document.querySelectorAll('.carousel-slide1');
// const slides2 = document.querySelectorAll('.carousel-slide2');
const slides3 = document.querySelectorAll('.carousel-slide3');
// const slides4 = document.querySelectorAll('.carousel-slide4');
let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;
let currentIndex4 = 0;

// function showSlide1(idx) {
//     slides1.forEach(slide => {
//         slide.classList.remove('active')
//         slide.classList.remove('slide-right-to-left-animation');
//     });
//     slides1[idx].classList.add('active');
//     slides1[idx].classList.add('slide-right-to-left-animation');
// }

// function nextSlide1() {
//   currentIndex1++;
//   if (currentIndex1 >= slides1.length) {
//     currentIndex1 = 0;
//   }
//   showSlide1(currentIndex1);
// }

// setInterval(nextSlide1, 4000);

// function showSlide2(idx) {
//     slides2.forEach(slide => {
//         slide.classList.remove('active')
//         slide.classList.remove('slide-right-to-left-animation');
//     });
//     slides2[idx].classList.add('active');
//     slides2[idx].classList.add('slide-right-to-left-animation');
// }

// function nextSlide2() {
//     currentIndex2++;
//     if (currentIndex2 >= slides2.length) {
//       currentIndex2 = 0;
//     }
//     showSlide2(currentIndex2);
// }

// setInterval(nextSlide2, 4000);

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

// function showSlide4(idx) {
//   slides4.forEach(slide => {
//       slide.classList.remove('active')
//       slide.classList.remove('slide-right-to-left-animation');
//   });
//   slides4[idx].classList.add('active');
//   slides4[idx].classList.add('slide-right-to-left-animation');
// }

// function nextSlide4() {
//   currentIndex4++;
//   if (currentIndex4 >= slides4.length) {
//     currentIndex4 = 0;
//   }
//   showSlide4(currentIndex4);
// }

// setInterval(nextSlide4, 4000);
