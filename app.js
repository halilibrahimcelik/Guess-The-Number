let localNumber = Math.floor(Math.random() * 100);

const inputArea = document.querySelector(".inputArea");
const lowerNumber = document.querySelector(".lowerNumber");
const higherNumber = document.querySelector(".higherNumber");

localNumber = 35;
let enteredNumber = 20;
let i = 0;
console.log(localNumber);

function validator() {
  i++;
  //   if (i === 3) {
  //     alert("You have failed to save me!");
  //     return;
  //   }
  console.log(i);
  if (localNumber > inputArea.value) {
    lowerNumber.innerText = inputArea.value;
    alert("If want to save me, enter a bigger number");
  } else if (inputArea.value > localNumber) {
    higherNumber.innerText = inputArea.value;
    alert("If want to save me enter, a smaller number");
  } else if (+inputArea.value === localNumber) {
    alert("Thank you Mario!");
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

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  validator();
  $("#target").focus();
  inputArea.value = "";
});
