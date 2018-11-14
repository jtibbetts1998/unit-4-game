console.log("Hi")
// Making scoreboard

    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var totalScore = [];

    var winsDisplay = document.getElementById("wins");
    var lossesDisplay = document.getElementById("losses");
    var userScoreDisplay = document.getElementById("userscore");
    var comScoreDisplay = document.getElementById("totalScore");


// Making crystals functional
    $(".crystal").on("click", function() {
        console.log("Click")

// If user wins game, add one to win column and reset score to zero
    if (userScore === totalScore) {
        wins++;
        winsDisplay.innerHTML = wins;
        console.log("You Win");
        reset();  
        }
    //if () {

       // }

    winsDisplay.textContent = "wins: " + wins;
    lossesDisplay.textContent = "losses: " +losses;
    });


