console.log("COUNTER APP STARTED");

const Decrement = document.getElementById("Decrement");
const Increment = document.getElementById("Increment");
const Reset = document.getElementById("Reset");
const Count = document.getElementById("Count");

let count = 0;

Decrement.addEventListener("click", () => {
  if (0 === count) {
    alert("Sorry this is not allowed");
  } else {
    count--;
    Count.textContent = count;
  }
});

Increment.addEventListener("click", () => {
  count++;
  Count.textContent = count;
});

Reset.addEventListener("click", () => {
  count = 0;
  Count.textContent = count;
});
