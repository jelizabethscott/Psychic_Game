var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var lost = 0;
var guessesLeft = 10;
var guessesSoFar = ('');



var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);


// When the user presses a key, it will run the following function...
document.body.onkeypress = function(event) {
    if (!/^[a-z]{1}$/.test(event.key)) return;


    var guessed = event.key;


    guessesLeft--;
    var guessesLeftElement = document.getElementById("guessesLeft");
    guessesLeftElement.textContent = guessesLeft;

    guessesSoFar += guessed;
    var guessedElement = document.getElementById("guessed");
    guessedElement.textContent = guessesSoFar;



    if (guessed === computerChoice) {
        wins++;
        var winsElement = document.getElementById("wins");
        winsElement.textContent = wins;

        guessesLeft = 10;
        var guessesLeftElement = document.getElementById('guessesLeft');
        guessesLeftElement.textContent = guessesLeft;

        guessesSoFar = '';
        var guessedElement = document.getElementById("guessed");
        guessedElement.textContent = guessesSoFar;

        alert("You Are The winner... This time!!!");

        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);





    } else {

        if (guessesLeft === 0) {
            lost++;
            var lostElement = document.getElementById("lost")
            lostElement.textContent = lost;

            guessesLeft = 10;
            var guessesLeftElement = document.getElementById('guessesLeft');
            guessesLeftElement.textContent = guessesLeft;

            guessesSoFar = '';
            var guessedElement = document.getElementById("guessed");
            guessedElement.textContent = guessesSoFar;

            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice);




        }

    }
};