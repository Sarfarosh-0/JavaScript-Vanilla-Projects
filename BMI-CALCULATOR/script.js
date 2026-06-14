const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");

// const links = {
//   profile: "img.icons8.com/ios-filled/50/FFFFFF/user-male-circle.png",
//   result: "https://img.icons8.com/ios-filled/50/FFFFFF/bar-chart.png",
//   ruler: "https://img.icons8.com/ios-filled/50/FFFFFF/length.png",
//   weight: "https://img.icons8.com/ios-filled/50/FFFFFF/weight.png",
//   info: "https://img.icons8.com/ios-filled/50/FFFFFF/info.png",
//   shiled: "https://img.icons8.com/ios-filled/50/FFFFFF/shield.png",
//   sun: "https://img.icons8.com/ios-filled/50/FFFFFF/sun--v1.png",
//   moon: "httpts://img.icons8.com/ios-filled/50/FFFFFF/do-not-disturb-2.png",
// };

lightBtn.addEventListener("click", () => {
  document.body.setAttribute("data-theme", "light");
});

darkBtn.addEventListener("click", () => {
  document.body.setAttribute("data-theme", "dark");
});

const heightUnit = document.getElementById("cm_feet");
const weightUnit = document.getElementById("kg_pounds");

heightUnit.addEventListener("change", syncUnits);
weightUnit.addEventListener("change", syncUnits);

function syncUnits() {
  if (heightUnit.value === "Cm") {
    weightUnit.value = "Kg";

    document.getElementById("heightExample").textContent =
      "Examples : 165, 170, 180";
    document.getElementById("weightExample").textContent =
      "Examples : 60, 70, 80";
  } else {
    weightUnit.value = "Pounds";

    document.getElementById("heightExample").textContent =
      "Examples : 5.6, 6.0 , 5.8";
    document.getElementById("weightExample").textContent =
      "Examples : 132, 160, 180";
  }
}

const CalculateBMI = document.getElementById("calculateBMI");
const inputCard = document.querySelector(".inputCard");

CalculateBMI.addEventListener("click", () => {
  if (Validate()) {
    Calculate();
  }
});
inputCard.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter pressed");
    Validate();
  }
});

// Function to Validate the Inputs
function Validate() {
  const height = parseFloat(document.getElementById("userHeight").value);
  const weight = parseFloat(document.getElementById("userWeight").value);

  if (isNaN(height) || isNaN(weight)) {
    alert("Please fill all fields.");
    return false;
  }

  if (height <= 0 || weight <= 0) {
    alert("Values must be greater than 0.");
    return false;
  }
  return true;
}

// Function to Calculate the BMI
function Calculate() {
  const height = document.getElementById("userHeight").value;
  const weight = document.getElementById("userWeight").value;

  if (heightUnit.value === "Cm") {
    const bmi = Number((weight / (height / 100) ** 2).toFixed(1));
    Categories(bmi);
    document.getElementById("BMI").textContent = bmi;
  } else if (heightUnit.value === "Feet") {
    const heightInches = height * 12;
    const bmi = Number(((weight * 703) / heightInches ** 2).toFixed(1));
    Categories(bmi);
    document.getElementById("BMI").textContent = bmi;
  }

  document.getElementById("userHeight").value = "";
  document.getElementById("userWeight").value = "";
}

// Function to Categories the BMI
function Categories(bmi) {
  let BMI = document.getElementById("BMI");
  let BMICategory = document.getElementById("BMICategory");
  if (bmi < 18.5) {
    BMI.style.color = "#3B82F6";
    BMICategory.style.color = "#3B82F6";
    BMICategory.textContent = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    BMI.style.color = "#22C55E";
    BMICategory.style.color = "#22C55E";
    BMICategory.textContent = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    BMI.style.color = "#FACC15";
    BMICategory.style.color = "#FACC15";
    BMICategory.textContent = "Overweight";
  } else {
    BMI.style.color = "#F97316";
    BMICategory.style.color = "#F97316";
    BMICategory.textContent = "Obese";
  }

  let resetTimer;

  clearTimeout(resetTimer);

  resetTimer = setTimeout(() => {
    let BMI = document.getElementById("BMI");
    let BMICategory = document.getElementById("BMICategory");

    BMI.style.color = "#64748b";
    BMI.textContent = "--";

    BMICategory.style.color = "#2563eb";
    BMICategory.textContent = "--";
  }, 60000);
}
