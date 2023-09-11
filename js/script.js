//modals

const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
  modal.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);

// live time!
const today = new Date();
document.getElementById("footerTime").innerHTML =
  today.getHours() + ":" + today.getMinutes();

// trying to get music to play!!!!!

const $ = document;
$.get = $.getElementById;
const log = console.log;
const warn = console.warn;
const error = console.error;

const trigger = $.get("trigger");

trigger.addEventListener("click", function () {
  if (trigger.getAttribute("data-is-open") == "false") {
    trigger.setAttribute("data-is-open", "true");
    $.get("modal").style.display = "block";
    trigger.innerHTML = "close";
    playSound("https://www.youtube.com/watch?app=desktop&v=5STL7iVpW6Q");
  } else {
    $.get("modal").style.display = "none";
    trigger.innerHTML = "reopen";
    trigger.setAttribute("data-is-open", "false");
  }
});

function playSound(url) {
  const audio = document.createElement("audio");
  audio.src = url;
  // Your audio settings
  audio.play();
}

// DROPUP??

// $(".dropbtn").click(() => {
//   $(".dropup").toggleClass("active"); // dropdown switch state each time you click
// });

// MODAL SLIDESHOW

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
