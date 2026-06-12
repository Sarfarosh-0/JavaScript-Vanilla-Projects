// adding all the colors button
const red = document.getElementById("redBtn");
const blue = document.getElementById("blueBtn");
const green = document.getElementById("greenBtn");
const yellow = document.getElementById("yellowBtn");
const purple = document.getElementById("purpleBtn");
const orange = document.getElementById("orangeBtn");

const colorName = document.getElementById("ColorName");

// For Red
red.addEventListener("click", function changeRed() {
  const colorBox = document.getElementById("ColorBox");
  colorBox.style.backgroundColor = "red";
  colorName.textContent = "Red";
});
// For Bule
blue.addEventListener("click", function changeBule() {
  const colorBox = document.getElementById("ColorBox");
  colorBox.style.backgroundColor = "blue";
  colorName.textContent = "Blue";
});
// For Green
green.addEventListener("click", function changeGreen() {
  const colorBox = document.getElementById("ColorBox");
  colorBox.style.backgroundColor = "green";
  colorName.textContent = "Green";
});
// For Yellow
yellow.addEventListener("click", function changeYellow() {
  const colorBox = document.getElementById("ColorBox");
  colorBox.style.backgroundColor = "yellow";
  colorName.textContent = "Yellow";
});
// For Purple
purple.addEventListener("click", function chnagePurple() {
  const colorBox = document.getElementById("ColorBox");
  colorBox.style.backgroundColor = "blueviolet";
  colorName.textContent = "Purple";
});
// For Orange
orange.addEventListener("click", function chnageOrange() {
  const colorBox = document.getElementById("ColorBox");
  colorBox.style.backgroundColor = "orange";
  colorName.textContent = "Orange";
});

const random = document.getElementById("randomColor");
const commonColors = [
  "DoggerBlue",
  "White",
  "Gray",
  "Silver",
  "Maroon",
  "Red",
  "Purple",
  "Fuchsia",
  "Green",
  "Lime",
  "Olive",
  "Yellow",
  "Navy",
  "Blue",
  "Teal",
  "Aqua",
  "Orange",
  "Tomato",
  "Coral",
  "DarkOrange",
  "Gold",
  "Khaki",
  "PeachPuff",
  "Crimson",
  "DeepPink",
  "HotPink",
  "LightPink",
  "Salmon",
  "RosyBrown",
  "Indigo",
  "BlueViolet",
  "DarkViolet",
  "SlateBlue",
  "RebeccaPurple",
  "RoyalBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "SkyBlue",
  "DeepSkyBlue",
  "LightBlue",
  "SteelBlue",
  "MidnightBlue",
  "DarkCyan",
  "Turquoise",
  "Aquamarine",
  "MediumSeaGreen",
  "ForestGreen",
  "SeaGreen",
  "DarkGreen",
  "Sienna",
  "Chocolate",
  "Brown",
];

random.addEventListener("click", function randomColor() {
  let color = Math.floor(Math.random() * 50);
  const Name = commonColors[color];
  const colorBox = document.getElementById("ColorBox");
  colorBox.style.backgroundColor = commonColors[color];
  colorName.textContent = Name;
});
