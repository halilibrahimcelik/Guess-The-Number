let localNumber = Math.floor(Math.random() * 50);

const btn = document.querySelector("button");
const inputArea = document.querySelector(".inputArea");
const lowerNumber = document.querySelector(".lowerNumber");
const higherNumber = document.querySelector(".higherNumber");
const chanceNumber = document.querySelector("strong");

const figureParts = document.querySelectorAll(".figure-part");
const popUp = document.getElementById("popUp-container");
const playAgainBtn = document.getElementById("play-again");
const finalMessage = document.getElementById("final-Message");
// localNumber = 35;
let enteredNumber = 20;
let count = 6;
console.log(localNumber);

//!validating input
function validator() {
  if (inputArea.value === "") {
    alert("Please enter a valid number");
    return;
  }
  resetCount();
  if (count < 0) return null;
  chanceNumber.innerText = count;
  console.log(count);
  figureParts.forEach((part, index) => {
    if (index < count) {
      part.style.display = "none";
      console.log(index);
    } else {
      part.style.display = "block";
    }
  });

  if (localNumber > inputArea.value) {
    lowerNumber.innerText = inputArea.value;
    if (count === 0) return;

    alert("If you want to save me, enter a bigger number");
  } else if (+inputArea.value > localNumber) {
    higherNumber.innerText = inputArea.value;
    if (count === 0) return;
    alert("If  you want to save me enter, a smaller number");
  } else if (+inputArea.value === localNumber) {
    figureParts.forEach((part) => (part.style.display = "none"));
    finalMessage.innerText = "Congratulations! You won! 😃";
    popUp.style.display = "flex";
    return;
  }
}

//!reset the count
function resetCount() {
  count--;
  if (count === 0) {
    finalMessage.innerText = "I thought you would save me😔";
    popUp.style.display = "flex";
    return;
  }
}

//!validating input number
inputArea.addEventListener("change", () => {
  let v = parseInt(inputArea.value);

  if (v < 1) {
    alert("Minumum number is 0");
    inputArea.value = 1;
  }
  if (v > 100) {
    alert("Max number is 50");
    inputArea.value = 50;
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  validator();
  $("#target").focus();
  inputArea.value = "";
});

playAgainBtn.addEventListener("click", () => {
  popUp.style.display = "none";
  window.location.reload();
});
