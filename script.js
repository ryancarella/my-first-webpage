"use strict";

// Native <details> elements keep every role accessible without JavaScript.
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// If the repository photograph has not been added, retain a clean hero.
const portrait = document.querySelector(".portrait img");

function hideMissingPortrait() {
  if (portrait) {
    portrait.closest("figure").hidden = true;
  }
}

if (portrait) {
  portrait.addEventListener("error", hideMissingPortrait);

  if (portrait.complete && portrait.naturalWidth === 0) {
    hideMissingPortrait();
  }
}
