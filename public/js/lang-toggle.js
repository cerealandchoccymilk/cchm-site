let isEnglish;

function jaLang() {
  for (let en of document.querySelectorAll(".en")) {
    en.style.display = "none";
  }
  for (let ja of document.querySelectorAll(".ja")) {
    ja.style.display = "revert";
  }
  isEnglish = false;
}
function enLang() {
  for (let en of document.querySelectorAll(".en")) {
    en.style.display = "revert";
  }
  for (let ja of document.querySelectorAll(".ja")) {
    ja.style.display = "none";
  }
  isEnglish = true;
}
window.onload = function () {
  jaLang();
};

function toggleLang() {
  if (isEnglish) {
    jaLang();
  } else {
    enLang();
  }
}
