
const min = 1;
const max = 6

let diceRoll = Math.floor(Math.random()* (max - min + 1)) + min; 

function rollDice(){

    const inputNumOfDice = document.getElementById("inputNumOfDice").value;
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")
    const values = []; //store all the dice rolls
    const images = []; //images for dice

    for(let i=0; i < inputNumOfDice; i++) {

        const value = Math.floor(Math.random()* (max - min + 1)) + min; 
        values.push(value)
        images.push(`<img src="dice_images/${value}.png" alt= "Dice ${value}">`)
    }
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('')
}