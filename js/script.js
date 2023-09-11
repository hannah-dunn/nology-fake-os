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

// Some shorthands
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
