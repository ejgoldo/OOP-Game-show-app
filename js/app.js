/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Testing code for all parts of the project VVV
//  const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// random phrase function test worked
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: ${phrase.phrase}`);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// end of test code



// event listener to start the game 
let game;
const startBtn = document.getElementById('btn__reset');
startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// event listeners for keypress of letter and on-screen keyboard
const keys = document.getElementById('qwerty');
keys.addEventListener('click', (event) => {
    const e = event.target;
    if(e.classList.contains('key')){
        game.handleInteraction(e);
    }
});

document.addEventListener('keydown', (event) => {
    const allKeys = document.querySelectorAll('.key');
    for(let i = 0; i<allKeys.length;i++){
        if(event.key === allKeys[i].textContent){
            if(allKeys[i].disabled === false){
                game.handleInteraction(allKeys[i]);
            } else {
                return false;
            }
        }
    }

});

