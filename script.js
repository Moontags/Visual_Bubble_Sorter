const arrayContainer = document.getElementById("array-container");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");

let array = [];

function createArray() {
  array = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);
  arrayContainer.innerHTML = "";
  array.forEach((value) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    bar.textContent = value;
    arrayContainer.appendChild(bar);
  });
}

async function bubbleSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";

      if (array[j] > array[j + 1]) {
        // Vaihto
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        bars[j].style.height = `${array[j] * 3}px`;
        bars[j].textContent = array[j];
        bars[j + 1].style.height = `${array[j + 1] * 3}px`;
        bars[j + 1].textContent = array[j + 1];
      }

      await new Promise((resolve) => setTimeout(resolve, 100));

      bars[j].style.backgroundColor = "#4CAF50";
      bars[j + 1].style.backgroundColor = "#4CAF50";
    }
  }
}

function resetArray() {
  createArray();
}

createArray();
startButton.addEventListener("click", bubbleSort);
resetButton.addEventListener("click", resetArray);
