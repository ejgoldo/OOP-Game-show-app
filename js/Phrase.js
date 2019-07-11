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

     checkLetter(){

     }

     showMatchedLetter(){
         
     }
 }