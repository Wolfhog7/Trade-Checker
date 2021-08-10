// Selectors
const boxOne = document.querySelector(".box-one");
const boxTwo = document.querySelector(".box-two");
const button = document.querySelector("button");
const result = document.querySelector(".result");

// Listeners
button.addEventListener("click", calculate);

// Functions

function calculate() {
  const cost = parseInt(document.querySelector("input").value);

  let boxOneValues = boxOne.value.split("\n");
  convertArrayToInt(boxOneValues);

  let boxTwoValues = boxTwo.value.split("\n");
  convertArrayToInt(boxTwoValues);

  let boxOneTotal = boxOneValues.reduce(addValuesInArray);
  let boxTwoTotal = boxTwoValues.reduce(addValuesInArray);

  let averagePricePaid = (boxTwoTotal / boxOneTotal).toFixed(2);

  if (averagePricePaid == cost) {
    result.innerText = `${boxOneTotal} items bought for ${boxTwoTotal} currency. Correct trade.`;
  } else {
    result.innerText = `${boxOneTotal} items bought for ${boxTwoTotal} currency. Incorrect trade.`;
  }
}

function convertArrayToInt(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
}

function addValuesInArray(total, value) {
  return total + value;
}
