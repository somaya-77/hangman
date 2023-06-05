//Letters
const leteers = "abcdefghijklmnopqrstuvwxyz";

// Get Array
let leteersArray = Array.from(leteers);

// select letters container
let lettersContainer = document.querySelector('.letters');

//Generate Letters
leteersArray.forEach(letter => {

    // Create span
    let span = document.createElement("span");

    // create letter text Node
    let theLetter = document.createTextNode(letter);

    // Append the letter to span
    span.appendChild(theLetter);

    // Add class on span
    span.className = "box-letter";

    // Append span to the letters container
    lettersContainer.appendChild(span)
});

// object of words + categories

const words = {
    programming: ["Php", "JavaScript", "Go", "Scala", "Fotran", "r", "Mysql", "Python"],
    movies: ["prestige", "Inception", "Parasite", "Interstellar", "whiplash", "memento", "coco"],
    people: ["albert einstein", "hitchocok", "alexander", "cleopatra"],
    cuntries: ["syria", "palestine", "yemen", "egypt", "bahrain", "qater"]
}

// get random property
let allKeys = Object.keys(words);

// random number
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// random name
let randomPropName = allKeys[randomPropNumber];

// random value
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];

localStorage.setItem("value",randomValueValue)

// set Category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// select letters Guess Element
let letterGuessContainer = document.querySelector(".letters-guess");

//covert chsen depend on word
let leteersAndSpace = Array.from(randomValueValue);

//create spans depnend
leteersAndSpace.forEach(letter => {

    // create empty span
    let emptySpan = document.createElement("span");

    // If letter is span
    if (letter === ' ') {

        // Add class to the span
        emptySpan.className = 'with-space';
    }

    // Append span to the letters Guess container
    letterGuessContainer.appendChild(emptySpan);
});

// select spans
let guessSpan = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;
let trueAttempts = 0;

let theDraw = document.querySelector(".hangman-drow")
// handel clicked letters

document.addEventListener("click" , (e) => {

    // set status
    let theStatus = false;

    if(e.target.className === 'box-letter') {

        e.target.classList.add("clicked");

        // get clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // the chosen word
        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        // the chosen word
        theChosenWord.forEach((wordLetter, wordIndex) => {

            // if the cliked letter = to one chosen word letter
            if(theClickedLetter == wordLetter) {

                theStatus = true;

                guessSpan.forEach((span, spanIndex) => {
                    if(wordIndex === spanIndex) {
                        span.innerHTML = theClickedLetter;
                    };
                });
            };
        });
        if(theStatus == false) {
            wrongCount()
            document.getElementById("negative").play();
        }else{
            rightCount()
            document.getElementById("success").play();
        };
    };
});

function wrongCount(){

    wrongAttempts++;

    theDraw.classList.add(`wrong-${wrongAttempts}`);

    if(wrongAttempts === 8){

        endGame();
        lettersContainer.classList.add("finished");
        document.getElementById("end").play();
    }
}

function endGame() {
    document.querySelector(".overlay-wrong").style.transform = "scale(1)";
    document.getElementById("value").innerHTML = localStorage.getItem("value");
}

function rightCount(){
    trueAttempts++;

    if(trueAttempts === randomValueValue.length){
        document.getElementById("finish").play();
        document.querySelector(".overlay-corect").style.transform = "scale(1)";
    }
}




















