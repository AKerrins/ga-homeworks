// * Remember to run "go live" below to see your changes on save.
// - 1 When a user makes their choice (rock, paper or scissors), you should also randomly generate a computer choice
// - 2 Write some logic to determine who has won
// - 3 Display the player's choice and the computer's choice
// - 4 Display the winner on the page
// - 5 When the reset button is clicked, clear the choices and the winner from the screen

// **Note:** Remember to wrap your code in a `DOMContentLoaded` event listener.
// * write all your code INSIDE the function below
function init() {
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const restart = document.querySelector('[restart-button]')
const SELECTIONS =[
    { 
    name:'rock',
    object:'Rock',
    beats:'scissors'
    },
    {
    name:'paper',
    object:'Paper',
    beats:'rock'
    },
    {
    name:'scissors',
    object:'Scissors',
    beats:'paper'
    }
    ]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click' , e => {
     const selectionName = selectionButton.dataset.selection
     const selection = SELECTIONS.find(selection => selection.name === selectionName)
     makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
const div = document.createElement('div')
div.innerText = selection.object
div.classList.add('result-selection')
if (winner) div.classList.add('winner')
finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
} 
// trying to restart the game
// function restartGame() {
//     selection.computerScoreSpan = 0;
//     selection.playerScoreSpan =0;
//     selection.finalColumn = 0;
//     selection.innerHTML= 0;
// }

// restart.addEventListener('click', restartGame)
// restart_btn.innerText = 'Restart';
// restart_btn.style.display = 'flex'
// restart_btn.addEventListener('click',() => {
//             window.location.reload();
//         })
}

// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)
