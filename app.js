let localNumber = Math.floor(Math.random() * 100);

const btn = document.querySelector("button");
const inputArea = document.querySelector(".inputArea");
const lowerNumber = document.querySelector(".lowerNumber");
const higherNumber = document.querySelector(".higherNumber");
const chanceNumber = document.querySelector("strong");

localNumber = 35;
let enteredNumber = 20;
let count = 5;
console.log(localNumber);

//!validating input
function validator() {
  if (inputArea.value === "") {
    alert("Please enter a valid number");
    return;
  }

  if (localNumber > inputArea.value) {
    lowerNumber.innerText = inputArea.value;
    alert("If want to save me, enter a bigger number");
  } else if (inputArea.value > localNumber) {
    higherNumber.innerText = inputArea.value;
    alert("If want to save me enter, a smaller number");
  } else if (+inputArea.value === localNumber) {
    alert("Thank you Mario!");
  }

  resetCount();
  if (count < 0) return null;
  chanceNumber.innerText = count;
}

//!reset the count
function resetCount() {
  count--;
  if (count === 0) {
    alert("You have failed to save me!");
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
    alert("Max number is 100");
    inputArea.value = 100;
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  validator();
  $("#target").focus();
  inputArea.value = "";
});
