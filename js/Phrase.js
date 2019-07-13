/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
        this.phrase = phrase;
     }

    /**
    * Display phrase on game board
    */
     addPhraseToDisplay(){
        const htmlPhrases = document.querySelector('#phrase ul');
        htmlPhrases.innerHTML= "";
        const split = this.phrase.split("");
            split.forEach(letter => {
                let li = document.createElement('li');
                let itemText = document.createTextNode(letter);
                li.appendChild(itemText);
                    if(letter === ' '){
                        li.classList.add('space');
                    } else {
                        li.classList.add('hide', 'letter', `${letter}`);
                    }
                    htmlPhrases.appendChild(li);
            });
     }


     /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
     checkLetter(letter){
        if(this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        }
     }


     /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
     showMatchedLetter(letter){
         const allLetters = document.querySelectorAll(`.${letter}`);
         if(this.checkLetter(letter)){
             for(let i=0; i<allLetters.length; i++){
                 allLetters[i].classList.add('show');
                 allLetters[i].classList.remove('hide');
             }
         }
     }
 }