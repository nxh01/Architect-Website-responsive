const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
})
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

// Scroll in 


// SCROLL CODING

// let numberOfScans = 1


// let firstHeading = document.getElementById("first-heading");

// console.log(firstHeading.getBoundingClientRect());

// function isVisible(element) {
//     let elementBox = element.getBoundingClientRect();
//     let distanceFromTop = -200; 

//     if(elementBox.top - window.innerHeight < distanceFromTop) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function scanDocument() {
//     let sectionList = document.querySelectorAll('.hidden');
//     sectionList.forEach(function(section) {
//         if(isVisible(section)) {
//             section.classList.remove('hidden');
//         };
//     });

//     console.log(numberOfScans);
//     numberOfScans++;
// }


// document.addEventListener("scroll", scanDocument);


// // function throttle(fn, wait) {
// //     var time = Date.now();
// //     return function() {
// //       if ((time + wait - Date.now()) < 0) {
// //         fn();
// //         time = Date.now();
// //       }
// //     }
// //   }
