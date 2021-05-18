// zamiana kształtu
var navigation = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");
var count = 0;

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  navigation.classList.toggle("navigation--active");
};

hamburger.addEventListener("click", handleClick);

// zamiana ikonki z play na stop i na odwrót, odtwarzanie muzyczki
var playStop1 = document.querySelector(".play-stop1");
var song1 = document.querySelector(".song1");
var playStop2 = document.querySelector(".play-stop2");
var song2 = document.querySelector(".song2");
var playStop3 = document.querySelector(".play-stop3");
var song3 = document.querySelector(".song3");
var songs = [song1, song2, song3];

const playerClick1 = () => {
  if (song1.paused && song2.paused && song3.paused) {
    song1.play();
    document.querySelector(".img1").src = "img/pause.svg";
    // curr_track = song1;
    changeVolume();
  } else {
    song1.pause();
    document.querySelector(".img1").src = "img/play.svg";
  }
};

playStop1.addEventListener("click", playerClick1);

const playerClick2 = () => {
  if (song2.paused && song1.paused && song3.paused) {
    song2.play();
    document.querySelector(".img2").src = "img/pause.svg";
    // curr_track = song2;
    changeVolume();
  } else {
    song2.pause();
    document.querySelector(".img2").src = "img/play.svg";
  }
};

playStop2.addEventListener("click", playerClick2);

const playerClick3 = () => {
  if (song3.paused && song1.paused && song2.paused) {
    song3.play();
    document.querySelector(".img3").src = "img/pause.svg";
    // curr_track = song3;
    changeVolume();
  } else {
    song3.pause();
    document.querySelector(".img3").src = "img/play.svg";
  }
};

playStop3.addEventListener("click", playerClick3);

//na zakończenie piosenki
song1.addEventListener("ended", () => {
  document.querySelector(".img1").src = "img/play_button2.png";
});
song2.addEventListener("ended", () => {
  document.querySelector(".img2").src = "img/play_button2.png";
});

song3.addEventListener("ended", () => {
  document.querySelector(".img3").src = "img/play_button2.png";
});

//zmiana głośności
function changeVolume() {
  var volume_slider = document.querySelector(".volume_slider");
  volume_slider.addEventListener("change", () => {
    songs.forEach((curr_track) => {
      curr_track.volume = volume_slider.value / 100;
    });
  });
}

// linki do poszczególnych sekcji
const scrollToSection1 = () => {
  window.scrollTo(0, document.querySelector(".header-right").offsetTop);
};
document
  .querySelector(".navigation-section1")
  .addEventListener("click", scrollToSection1);

const scrollToSection2 = () => {
  window.scrollTo(0, document.querySelector(".section1-right").offsetTop);
};
document
  .querySelector(".navigation-section2")
  .addEventListener("click", scrollToSection2);

const scrollToSection3 = () => {
  window.scrollTo(0, document.querySelector(".section2-right").offsetTop);
};
document
  .querySelector(".navigation-section3")
  .addEventListener("click", scrollToSection3);

const scrollToSection4 = () => {
  window.scrollTo(0, document.querySelector(".section3-right").offsetTop);
};
document
  .querySelector(".navigation-section4")
  .addEventListener("click", scrollToSection4);

const scrollToSection5 = () => {
  window.scrollTo(0, document.querySelector(".section4-right").offsetTop);
};
document
  .querySelector(".navigation-section5")
  .addEventListener("click", scrollToSection5);

const scrollToSection6 = () => {
  window.scrollTo(0, document.querySelector(".section5-right").offsetTop);
};
document
  .querySelector(".navigation-section6")
  .addEventListener("click", scrollToSection6);

// link z button let's start
const scrollToStart = () => {
  window.scrollTo(0, document.querySelector(".section1-right").offsetTop);
};
document
  .querySelector(".header-button-span")
  .addEventListener("click", scrollToStart);
