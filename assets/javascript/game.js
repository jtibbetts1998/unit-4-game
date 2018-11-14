console.log("Click")
// Making scoreboard

    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var totalScore = 0;

    var winsDisplay = document.getElementById("wins");
    var lossesDisplay = document.getElementById("losses");
    var userScoreDisplay = document.getElementById("userscore");
    var totalScoreDisplay = document.getElementById("totalScore");

// Starting game and assigning random values
    function start(){
        userScore = 0;
        totalScore = [19-120];
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;

        console.log (crystal1, crystal2, crystal3, crystal4);

    }


start();
// Making crystals functional
    $("#crystal1").on("click", function() {
        console.log("Click")
        userScore += crystal1;
        console.log(userScore);

// If user wins game, add one to win column and reset score to zero
    if (userScore === totalScore) {
        wins++;
        winsDisplay.innerHTML = wins;
        console.log("You Win");
        start();  
        }
// If user losses game, add one to lose column and reset score to zero
    else if (userScore > totalScore) {
        losses++;
        lossesDisplay.innerHTML = losses;
        console.log("You Lose");
        start();
        }

    winsDisplay.textContent = "Wins: " + wins;
    lossesDisplay.textContent = "Losses: " + losses;
    });


