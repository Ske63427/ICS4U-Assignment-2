const ALL_POSTER_SETS = [["Movies/theGodfather.jpg","Movies/pulpFiction.jpg","Movies/goodfellas.jpg"], ["Movies/forrestGump.jpg","Movies/furious7.jpg","Movies/interstellar.jpg"], ["Movies/theKarateKid.jpg","Movies/theDarkKnightRises.jpg","Movies/shawshankRedemption.jpg"], ["Movies/lordOfTheRings.jpg","Movies/starWarsEpisode4.jpg","Movies/harryPotterAndTheSorcerersStone.jpg"], ["Movies/fightClub.jpg","Movies/theMatrix.jpg","Movies/inception.jpg"]];

const POSTER_SLOTS = [document.getElementById("posterOne"), document.getElementById("posterTwo"), document.getElementById("posterThree")]

const LEFT_BUTTON = document.getElementById("LEFT_BUTTON");
const RIGHT_BUTTON = document.getElementById("RIGHT_BUTTON");

let chosenSet = 0;
let activeSet = ALL_POSTER_SETS[chosenSet];

function changePosters(set){
    activeSet = ALL_POSTER_SETS[set];
    for (i = 0; i < POSTER_SLOTS.length; i++){
        POSTER_SLOTS[i].src = activeSet[i];
    }
}

RIGHT_BUTTON.addEventListener("click", () => {
    changePosters(chosenSet < 4 ? ++chosenSet : chosenSet = 0);
})

LEFT_BUTTON.addEventListener("click", () => {
    changePosters(chosenSet > 0 ? --chosenSet : chosenSet = 4);
})