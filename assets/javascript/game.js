console.log("Click")
// Establishing scoreboard

    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var totalScore = 0;

    var winsDisplay = document.getElementById("wins");
    var lossesDisplay = document.getElementById("losses");
    var userScoreDisplay = document.getElementById("userScore");
    var totalScoreDisplay = document.getElementById("totalScore");

// Assigning random values
    function start() {
        userScore = 0;
        totalScore = Math.floor(Math.random() * 120) + 19;
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;

        console.log (crystal1, crystal2, crystal3, crystal4);
        winsDisplay.textContent = "Wins: " + wins;
        lossesDisplay.textContent = "Losses: " + losses;
        userScoreDisplay.textContent = "User Score: " + userScore;
        totalScoreDisplay.textContent = "Total Score: " + totalScore;

    }


start();
// Making each crystal along with making them functional
    $("#crystal1").on("click", function() {
        console.log("Click")
        userScore += crystal1;
        console.log(userScore);
        winsDisplay.textContent = "Wins: " + wins;
        lossesDisplay.textContent = "Losses: " + losses;
        userScoreDisplay.textContent = "User Score: " + userScore;
        totalScoreDisplay.textContent = "Total Score: " + totalScore;
    });

    $("#crystal2").on("click", function() {
        console.log("Click")
        userScore += crystal2;
        console.log(userScore);
        winsDisplay.textContent = "Wins: " + wins;
        lossesDisplay.textContent = "Losses: " + losses;
        userScoreDisplay.textContent = "User Score: " + userScore;
        totalScoreDisplay.textContent = "Total Score: " + totalScore;
    });
    
    $("#crystal3").on("click", function() {
        console.log("Click")
        userScore += crystal3;
        console.log(userScore);
        winsDisplay.textContent = "Wins: " + wins;
        lossesDisplay.textContent = "Losses: " + losses;
        userScoreDisplay.textContent = "User Score: " + userScore;
        totalScoreDisplay.textContent = "Total Score: " + totalScore;
    });

    $("#crystal4").on("click", function() {
        console.log("Click")
        userScore += crystal4;
        console.log(userScore);
        winsDisplay.textContent = "Wins: " + wins;
        lossesDisplay.textContent = "Losses: " + losses;
        userScoreDisplay.textContent = "User Score: " + userScore;
        totalScoreDisplay.textContent = "Total Score: " + totalScore;
    });

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
