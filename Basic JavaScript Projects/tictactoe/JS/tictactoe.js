//This variable keeps track of whose turn it is.//
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conitions.//
 let selectedSquares = [];

 //This function is for placing an x or o in a square//
 function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.//
    //The .some() method is used to check each element of the selectSquare array//
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrives the HTML element id that was clicked//
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML//
            select.style.backgroundImage = 'url("Media/x.png")';
            //Active player may only be 'X' or 'O'so, if not 'X' it must be 'O'//

        } else {
            //If activePlayer is equal to 'O', the O.png is placed in HTML
            select.style.backgroundImage = 'url("Media/o.png")'; 
        }
        //squareNumber and activePlayer are concatenated together and added to array.//
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.//
        checkwinCondition();
        //This condition is for changing the active player.//
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'O'.//
            activePlayer = 'O';
            //If active player is anything other than 'X'//
        } else {
            //Change the activePlayer to 'X'
            activePlayer = 'X';
        }
        //This function plays placement sound.//
        audio('./Media/place.mp3');
        //This condtion checks to see if it is the computers turn.//
        if (activePlayer === 'O') {
            //This function disables clicking for the computers turn.//
            disabledClick();
            //This function waits 1 seconds before the computer places an image and enables click.//
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.//
        return true;
    }
    //This function results in a random square being selected by the computer.//
    function computerTurn() {
        //This boolean is needed for our while loop.//
        let success = false;
        //This variable stores a random number 0-0.//
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.//
        while (!success) {
            //A random number between 0 and 8 is selected.//
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated return true, the square hasn't been selected yet.//
            if (placeXOrO(pickASquare)) {
                //This line calls the function.//
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.//
                success = true;
            };
        }
    }
 }

 //This function parses the selectedSquares array to search for win condition.//
 //drawLine() function is called to draw a line on the screen if the condition is not.//
 function checkwinCondition() {
    // X O, 1, 2 condition.//
    if (arrayIncludes('0X', '1X', '2X')) { drawwinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition.//
    else if (arrayIncludes('3X', '4X', '5X' )) { drawwinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition.//
    else if (arrayIncludes('6X', '7X', '8X' )) { drawwinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition.//
    else if (arrayIncludes('0X', '3X', '6X' )) { drawwinLine(100, 50, 100, 5558) }
    // X 1, 4, 7 condition.//
    else if (arrayIncludes('1X', '4X',  '7X' )) { drawwinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition.//
    else if (arrayIncludes('2X', '5X', '8X' )) { drawwinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition.//
    else if (arrayIncludes('6X', '4X', '2X' )) { drawwinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition.//
    else if (arrayIncludes('0X', '4X', '8X' )) { drawwinLine(100, 100, 520, 5520) }
    // O 0, 1, 2 condition.//
    else if (arrayIncludes('0O', '1O', '2O' )) { drawwinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition.//
    else if (arrayIncludes('3O', '4O', '5O' )) { drawwinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition.//
    else if (arrayIncludes('6O', '7O', '8O' )) { drawwinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition.//
    else if (arrayIncludes('0O', '3O', '6O' )) { drawwinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition.//
    else if (arrayIncludes('1O', '4O', '7O' )) { drawwinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition.//
    else if (arrayIncludes('2O', '50O', '8O' )) { drawwinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition.//
    else if (arrayIncludes('6O', '4O', '2O' )) { drawwinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition.//
    else if (arrayIncludes('0O', '4O', '8O' )) { drawwinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are not and 9 squares are selected the code executes.//

    else if (selectedSquares >= 9) {
        //This function plays the tie game.//
        audio('./Media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.//
        setTimeout(function () { resetGame(); }, 500);
    }
    //This function checks if an array includes 3 strings. It is used to check for each win condition.//

    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.//
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then.//
        //true is returned and our else if condition executes the drawLine() function.//
        if (a === true && b === true && c === true) { return true; }
    }
 }