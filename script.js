const posterSet1 = [
  "Movies/fightClub.jpg",
  "Movies/theMatrix.jpg",
  "Movies/pulpFiction.jpg",
];
const posterSet2 = [
  "Movies/forrestGump.jpg",
  "Movies/theKarateKid.jpg",
  "Movies/interstellar.jpg",
];
const posterSet3 = [
  "Movies/furious7.jpg",
  "Movies/theGodfather.jpg",
  "Movies/shawshankRedemption.jpg",
];
const posterSet4 = [
  "Movies/goodfellas.jpg",
  "Movies/theDarkKnightRises.jpg",
  "Movies/harryPotterAndTheSorcerersStone.jpg",
];
const posterSet5 = [
  "Movies/inception.jpg",
  "Movies/starWarsEpisode4.jpg",
  "Movies/lordOfTheRings.jpg",
];
const posterSets = [posterSet1, posterSet2, posterSet3, posterSet4, posterSet5];

const poster1 = document.getElementById("movie-1");
const poster2 = document.getElementById("movie-2");
const poster3 = document.getElementById("movie-3");

let activeSet = posterSets[0];

const set = document.getElementById("poster");
const slider = document.getElementById("slider");

slider.addEventListener("input", () => {
      activeSet = posterSets[1];
});
console.log(slider.value);
