// internet
const internetModal = document.getElementById("internetModal");
const openInternetModalBtn = document.getElementById("openInternetModalBtn");
const closeInternetModalBtn = document.getElementById("closeInternetModalBtn");

openInternetModalBtn.addEventListener("click", () => {
  internetModal.style.display = "block";
});

closeInternetModalBtn.addEventListener("click", () => {
  internetModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == internetModal) {
    internetModal.style.display = "none";
  }
});

// notepad
const notepadModal = document.getElementById("notepadModal");
const openNotepadModalBtn = document.getElementById("openNotepadModalBtn");
const closeNotepadModalBtn = document.getElementById("closeNotepadModalBtn");

openNotepadModalBtn.addEventListener("click", () => {
  notepadModal.style.display = "block";
});

closeNotepadModalBtn.addEventListener("click", () => {
  notepadModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == notepadModal) {
    notepadModal.style.display = "none";
  }
});

// pony
const ponyModal = document.getElementById("ponyModal");
const openPonyModalBtn = document.getElementById("openPonyModalBtn");
const closePonyModalBtn = document.getElementById("closePonyModalBtn");

openPonyModalBtn.addEventListener("click", () => {
  ponyModal.style.display = "block";
});

closePonyModalBtn.addEventListener("click", () => {
  ponyModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == ponyModal) {
    ponyModal.style.display = "none";
  }
});

// slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//modals broken :(

// const notepadModal = document.getElementById("notepad");
// const explorerModal = document.getElementById("explorer");
// const poniesModal = document.getElementById("ponies");
// const closeModalBtns = document.querySelectorAll(".btn-close");

// const openModal = function (modal) {
//   modal.classList.remove("hidden");
// };

// const openModalBtns = document.querySelectorAll(".btn-open");
// openModalBtns.forEach((icon) => {
//   icon.addEventListener("click", function () {
//     if (icon.classList.contains("notepad")) {
//       openModal(notepadModal);
//     } else if (icon.classList.contains("explorer")) {
//       openModal(explorerModal);
//     } else if (icon.classList.contains("ponies")) {
//       openModal(poniesModal);
//     }
//   });
// });

// const closeModal = function () {
//   const modal = this.closest(".modal");
//   if (modal) {
//     modal.classList.add("hidden");
//   }
// };

// closeModalBtns.forEach((btn) => {
//   btn.addEventListener("click", closeModal);
// });

// live time!
const today = new Date();
document.getElementById("footerTime").innerHTML =
  today.getHours() + ":" + today.getMinutes();
