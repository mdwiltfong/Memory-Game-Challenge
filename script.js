const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
let i = 0;
let firstCard;
let secondCard;
let btn = document.querySelector("button");
let clickedArray = [0];
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  let j = 0;
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    newDiv.setAttribute(`id`, `${j}`);
    j++;
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  if (i < 2) {
    event.target.style.backgroundColor = event.target.classList;
    i++;
    console.log(i)
    event.target.style.id = `clicked`;
    clickedArray.push(event.target);
    console.log(clickedArray)
  }
  if (i >= 2) {
    if (clickedArray[1].id === clickedArray[2].id ) {

      alert(`You've clicked on the same card! `)
      event.target.style.backgroundColor = `transparent`;
      i=0;
      clickedArray=[0];
    }else if(clickedArray[1].classList.value === clickedArray[2].classList.value){
      console.log(`Match!`)
      i=0;
      clickedArray=[0];
    }else{
      console.log(`Hmmm, try again`)
      setTimeout(() => {
        clickedArray[1].style.backgroundColor = "transparent";
        clickedArray[2].style.backgroundColor = "transparent";
        i = 0;
        clickedArray=[0];
        console.log(`Flipped`)
      }, 1000)
    }

  }
}


// when the DOM loads
createDivsForColors(shuffledColors);

//restart button

btn.addEventListener('click', () => {
  window.location.reload();
})