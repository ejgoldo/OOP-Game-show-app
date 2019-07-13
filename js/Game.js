/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }


     /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
     createPhrases(){
        const phrases = [
            new Phrase("close but no cigar"),
            new Phrase("a bird in the hand is worth two in the bush"),
            new Phrase("batten down the hatches"),
            new Phrase("early to bed and early to rise makes a man healthy, wealthy and wise"),
            new Phrase("rag and bone")
        ]
        return phrases;
     }

     /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
     getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
     }


     handleInteraction(){

     }


     /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
     removeLife(){
         this.missed+= 1;
         let heartLife = document.querySelector('.tries');
         let heartLifeImg = heartLife.firstChild;
         heartLife.classList.remove('tries');
         heartLifeImg.src = 'images/lostHeart.png';

         if(this.missed === 5){
             this.gameOver(false);
         }
     }


     /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
     checkForWin(){
        let phraseLetters = document.querySelectorAll('.letter');
        let matchedLetters = document.querySelectorAll('.show');
        if(matchedLetters.length === phraseLetters.length){
            return true;
        } else {
            return false;
        }
     }


    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
     startGame(){
        let overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
     gameOver(gameWon){
         const startPage = document.getElementById('overlay');
         startPage.style.display = 'flex';
         const hOneMessage = document.getElementById('game-over-message');
         startPage.classList.remove('start');
         if(gameWon){
             startPage.classList.add('win');
             let message = 'You won! Good job!';
             hOneMessage.textContent = message;
         } else {
             startPage.classList.add('lose');
             let message = 'Tough break. You lose. Better luck next time!';
             hOneMessage.textContent = message;
         }

     }
 }