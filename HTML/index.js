const toogleBtn = document.getElementById("toogle-btn"); // je lie ma constante  toogleBtn à mon bouton
const body = document.querySelector("body"); // je lie ma constante  body à mon body
const bgnd = document.getElementById("card-wrapper"); // je lie ma constante  bkCard à mon css card-wrapper
const txtLightMode = document.getElementById("txtLightMode"); // je lie ma constante  txtLightMode à mon texte txtLightMode
// const blurredBgnd = document.getElementsById("blurredBgnd"); // je lie ma const à ma classe blurredBgnd

let darkmode = localStorage.getItem("darkModeTheme"); // je crée un darkmode, sert à l'état activé ou non

const enableDarkMode = () => {
  body.classList.add("darkModeTheme");
  toogleBtn.classList.add("darkModeToogle");
  text.innerHTML = "éclairé";
  localStorage.setItem("darkModeTheme", "enabled");
  blurredBgnd.classList.add("blurredBgnd");
  blurredBgnd.classList.remove("blurredBgnd2");
};

const disableDarkMode = () => {
  body.classList.remove("darkModeTheme");
  toogleBtn.classList.remove("darkModeToogle");
  text.innerHTML = "sombre";
  localStorage.setItem("darkModeTheme", "disabled");
  blurredBgnd.classList.remove("blurredBgnd");
  blurredBgnd.classList.add("blurredBgnd2");
};

toogleBtn.onclick = function () {
  darkmode = localStorage.getItem("darkModeTheme");
  if (darkmode == "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};
