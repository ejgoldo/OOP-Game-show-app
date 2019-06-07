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
        const Phrase = [
            "close but no cigar",
            "a bird in the hand is worth two in the bush",
            "batten down the hatches",
            "early to bed and early to rise makes a man healthy, wealthy and wise",
            "rag and bone man"
        ]
     }

     startGame(){

     }

     getRandomPhrase(){

     }

     handleInteraction(){

     }

     removeLife(){
         
     }

     checkForWin(){

     }

     gameOver(){
         
     }
 }