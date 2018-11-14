        var guessCount = 10;
        var winCount = 0;
        var letterHistory = [];

        // list of words for the game
        var wordBank = ["switch", "psfour", "xbone", "computer", "mobile", "tablet"];
        var theGame = [];
        var initGame = wordBank[Math.floor(Math.random() * wordBank.length)];
        var gameCheck = 0;
        
        for (var i = 0; i < initGame.length; i++) {
            theGame[i] = "_ ";
        };

        var startText = document.getElementById("start-text");
        var winsText = document.getElementById("wins-text");
        var historyText = document.getElementById("history-text")
        var guesscountText = document.getElementById("guesscount-text");
        var guessText = document.getElementById("guess-text");
        var gameText = document.getElementById("game-text");
        
        // This function is run whenever the user presses a key.
        document.onkeyup = function(event) {
            // Determines which key was pressed.
            var guess = event.key;

            // add guess to the history and minus the guess count
            letterHistory.push(guess);
            guessCount--;

            // check for the letter in the selected word and replace theGame's _ accordingly
            if (initGame.indexOf(guess)) {
                for (var j = 0; j < initGame.length; j++ ) {
                    if (initGame[j] === guess) {
                        theGame[j] = guess;
                        gameCheck++;
                    }
                }
            }

            // win condition check
            if (gameCheck.length === initGame.length) {
                alert("Victory!");

                // display image of word guessed
                if (initGame === "switch") {
                    show_image('assets/images/switch.jpg', 300, 200, 'Switch');
                }
                else if (initGame === "psfour") {
                    show_image('assets/images/ps4.jpg', 300, 200, 'Playstation 4');
                }
                else if (initGame === "xbone") {
                    show_image('assets/images/xboxone.jpg', 300, 200, 'Playstation 4');
                }
                else if (initGame === "computer") {
                    show_image('assets/images/aelinware.jpg', 300, 200, 'Playstation 4');
                }
                else if (initGame === "mobile") {
                    show_image('assets/images/galaxy.jpg', 300, 200, 'Playstation 4');
                }
                else if (initGame === "tablet") {
                    show_image('assets/images/tablet.jpg', 300, 200, 'Playstation 4');
                };

                winCount++;
                guessCount = 10;
                alert("Resetting the game...");
                letterHistory = [];
                initGame = wordBank[Math.floor(Math.random() * wordBank.length)];
                for (var i = 0; i < initGame.length; i++) {
                    theGame[i] = "_ ";
                };
                guess = "";
            }
                
            // lose condition check
            if (guessCount === 0 ) {
                alert("Not good enough. The word was " + initGame + ".");
                guessCount = 10;
                alert("Resetting the game...");
                letterHistory = [];
                initGame = wordBank[Math.floor(Math.random() * wordBank.length)];
                for (var i = 0; i < initGame.length; i++) {
                    theGame[i] = "_ ";
                };
                guess = "";
            }
        
            // hide directions
            startText.textContent = "";

            // score and game display
            winsText.textContent = "Wins: " + winCount;
            guesscountText.textContent = "Guesses Left: " + guessCount;
            historyText.textContent = "Letters used: " + letterHistory.join(" ");
            guessText.textContent = "Current Guess: " + guess;
            gameText.textContent = "Target: " + theGame.join("");
        };

        // image display function
        function show_image(src, width, height, alt) {
            var img = document.createElement("img");
            img.src = src;
            img.width = width;
            img.height = height;
            img.alt = alt;

            document.body.appendChild(img);
        }