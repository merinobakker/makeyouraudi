/* Achtergrond instellen doormiddel van if else*/
var achtergrondButton = document.querySelector("#achtergrondButton");
var achtergrond = document.querySelector("body");

function veranderAchtergrond() {
  achtergrond.classList.toggle("garage");

  if (achtergrondButton.innerHTML == "Garage Background") {
    achtergrondButton.textContent = "Mountains Background";
  } else {
    achtergrondButton.textContent = " Garage background";
  }
}

achtergrondButton.addEventListener("click", veranderAchtergrond);

/*Array voor het veranderen van de kleur van de auto*/
var kleurElement = document.getElementById("kleurImg");
var kleurImgs = [
  "img/nardogrijs.png",
  "img/nightblack.png",
  "img/rood.png",
  "img/narravablue.png",
  "img/gletsjerwhite.png",
];
var knop1 = document.getElementById("veranderKnop1");
var knop3 = document.getElementById("veranderKnop2");
var knop4 = document.getElementById("veranderKnop3");
var knop5 = document.getElementById("veranderKnop4");
var knop6 = document.getElementById("veranderKnop5");

function veranderKleur1() {
  kleurElement.src = kleurImgs[0];
}

function veranderKleur2() {
  kleurElement.src = kleurImgs[1];
}

function veranderKleur3() {
  kleurElement.src = kleurImgs[2];
}

function veranderKleur4() {
  kleurElement.src = kleurImgs[3];
}

function veranderKleur5() {
  kleurElement.src = kleurImgs[4];
}

knop1.addEventListener("click", veranderKleur1);
knop3.addEventListener("click", veranderKleur2);
knop4.addEventListener("click", veranderKleur3);
knop5.addEventListener("click", veranderKleur4);
knop6.addEventListener("click", veranderKleur5);

var velgElement = document.getElementById("velgImg");
var velgImgs = [
  "img/goedevelgen.png",
  "img/matvelgen1.png",
  "img/zwartevelgen1.png",
  "img/zilvervelgen1.png",
];
var velgKnop1 = document.getElementById("velgKnop1");
var velgKnop2 = document.getElementById("velgKnop2");
var velgKnop3 = document.getElementById("velgKnop3");
var velgKnop4 = document.getElementById("velgKnop4");

function veranderVelg1() {
  velgElement.src = velgImgs[0];
}

function veranderVelg2() {
  velgElement.src = velgImgs[1];
}

function veranderVelg3() {
  velgElement.src = velgImgs[2];
}

function veranderVelg4() {
  velgElement.src = velgImgs[3];
}

velgKnop1.addEventListener("click", veranderVelg1);
velgKnop2.addEventListener("click", veranderVelg2);
velgKnop3.addEventListener("click", veranderVelg3);
velgKnop4.addEventListener("click", veranderVelg4);

/*Geluidje maken wanneer er op de button word geklikt door middel van: https://codepen.io/Sluggern/pen/qyXgVe kunnen maken*/
/**Bron geluidje :https://bigsoundbank.com/search?q=car */

sound = document.getElementById("vroom");
play = document.getElementById("vroomButton");

play.onclick = function () {
  sound.play();
};

/*Nog een if else om de auto af te maken, tekst verandert*/

function veranderTekst() {
  achtergrond.classList.toggle("klaar");

  if (vroomButton.innerHTML == "Finish your car!") {
    vroomButton.textContent = "Your car is done!";
  } else {
    vroomButton.textContent = "Your car is done!";
  }
}

vroomButton.addEventListener("click", veranderTekst);

/* Sticker knop, gewerkt met een lege afbeelding en met een klik komt de juiste afbeelding op de auto terecht*/

var stickerElement = document.getElementById("stickerImg");
var stickerImg = ["img/sticker.png"];

var stickerKnop = document.getElementById("stickerKnop");

function stickerErop() {
  stickerElement.src = stickerImg[0];
}

stickerKnop.addEventListener("click", stickerErop);

/** Meer horsepower geven aan de auto, door een youtube video geleerd,https://www.youtube.com/watch?v=GXsWa_6vnOo */

document.querySelector(".min-button").setAttribute("disabled", "disabled");
var horsepowerAantal;
var power = document.getElementById("power").innerText;

function totalePower() {
  var total = horsepowerAantal * power;
  document.getElementById("power").innerText = total;
}

document.querySelector(".plus-button").addEventListener("click", function () {
  horsepowerAantal = document.getElementById("hoeveelheden").value;
  horsepowerAantal++;
  document.getElementById("hoeveelheden").value = horsepowerAantal;

  if (horsepowerAantal > 1) {
    document.querySelector(".min-button").removeAttribute("disabled");
    document.querySelector(".min-button").classList.remove("disabled");
  }

  totalePower();
});

document.querySelector(".min-button").addEventListener("click", function () {
  horsepowerAantal = document.getElementById("hoeveelheden").value;
  horsepowerAantal--;
  document.getElementById("hoeveelheden").value = horsepowerAantal;

  if (horsepowerAantal == 1) {
    document.querySelector(".min-button").setAttribute("disabled", "disabled");
  }

  totalePower();
});

/** Geluidje maken als je op de upgrade knop klikt, door https://codepen.io/Sluggern/pen/qyXgVe */
/** Bron: https://mixkit.co/free-sound-effects/car/ */
sound2 = document.getElementById("upgrade");
play = document.getElementById("upgradeButton");

play.onclick = function () {
  sound2.play();
};

/** Geluidje maken als je op de rev knop klikt, door https://codepen.io/Sluggern/pen/qyXgVe */
/** Bron geluidje: https://www.youtube.com/watch?v=vSiNo41PUiQ */
sound3 = document.getElementById("rev");
play = document.getElementById("revIt");

play.onclick = function () {
  sound3.play();
};