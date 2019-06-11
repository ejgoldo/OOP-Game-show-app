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
        const selected = Math.floor(Math.random() * this.phrases.length) - 1;
        return selected;
     }
    //  working on random phrase

     handleInteraction(){

     }

     removeLife(){
         
     }

     checkForWin(){

     }

     startGame(){

    }

     gameOver(){
         
     }
 }