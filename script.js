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

const poster1 = document.getElementById("posterOne");
const poster2 = document.getElementById("posterTwo");
const poster3 = document.getElementById("posterThree");

// const set = document.getElementById("poster");
const slide = document.getElementById("slider");

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

let x = 0;
let activeSet = posterSets[x];

rightButton.addEventListener("click", ()=>{
  if (x<=4){
    x++;
    poster1.src = activeSet[0];
    poster2.src = activeSet[1];
    poster3.src = activeSet[2];
  }
  console.log("you touched me!");
})

