const POSTER_SET_ONE = ["Movies/theGodfather.jpg","Movies/pulpFiction.jpg","Movies/goodfellas.jpg"];
const POSTER_SET_TWO = ["Movies/forrestGump.jpg","Movies/furious7.jpg","Movies/interstellar.jpg"];
const POSTER_SET_THREE = ["Movies/theKarateKid.jpg","Movies/theDarkKnightRises.jpg","Movies/shawshankRedemption.jpg"];
const POSTER_SET_FOUR = ["Movies/lordOfTheRings.jpg","Movies/starWarsEpisode4.jpg","Movies/harryPotterAndTheSorcerersStone.jpg"];
const POSTER_SET_FIVE = ["Movies/fightClub.jpg","Movies/theMatrix.jpg","Movies/inception.jpg"];
const ALL_POSTER_SETS = [POSTER_SET_ONE, POSTER_SET_TWO, POSTER_SET_THREE, POSTER_SET_FOUR, POSTER_SET_FIVE];

const POSTER_SLOT_ONE = document.getElementById("posterOne");
const POSTER_SLOT_TWO = document.getElementById("posterTwo");
const POSTER_SLOT_THREE = document.getElementById("posterThree");
const ALL_POSTER_SLOTS = [POSTER_SLOT_ONE, POSTER_SLOT_TWO, POSTER_SLOT_THREE]

const LEFT_BUTTON = document.getElementById("LEFT_BUTTON");
const RIGHT_BUTTON = document.getElementById("RIGHT_BUTTON");

let chosenSet = 0;
let activeSet = ALL_POSTER_SETS[chosenSet];

function changePosters(set){
    activeSet = ALL_POSTER_SETS[set];
    for (i = 0; i < ALL_POSTER_SLOTS.length; i++){
        ALL_POSTER_SLOTS[i].src = activeSet[i];
    }
}

RIGHT_BUTTON.addEventListener("click", () => {
    chosenSet = (chosenSet < 4 ? ++chosenSet : chosenSet = 0);
    changePosters(chosenSet);
})

LEFT_BUTTON.addEventListener("click", () => {
    chosenSet = (chosenSet > 0 ? --chosenSet : chosenSet = 4);
    changePosters(chosenSet);
})