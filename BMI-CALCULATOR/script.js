const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");

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
      "Examples : 5.6, 6.0 , 5.11";
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
    if (Validate()) {
      Calculate();
    }
  }
});

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

let resetTimer;

function Calculate() {
  const heightVal = document.getElementById("userHeight").value;
  const weight = parseFloat(document.getElementById("userWeight").value);
  let bmi = 0;

  if (heightUnit.value === "Cm") {
    const heightCm = parseFloat(heightVal);
    bmi = Number((weight / (heightCm / 100) ** 2).toFixed(1));
  } else if (heightUnit.value === "Feet") {
    const parts = heightVal.toString().split(".");
    const feet = parseInt(parts[0], 10) || 0;
    const inches = parseInt(parts[1], 10) || 0;
    const totalInches = feet * 12 + inches;

    bmi = Number(((weight * 703) / totalInches ** 2).toFixed(1));
  }

  Categories(bmi);
  document.getElementById("BMI").textContent = bmi;

  document.getElementById("userHeight").value = "";
  document.getElementById("userWeight").value = "";

  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    let BMI = document.getElementById("BMI");
    let BMICategory = document.getElementById("BMICategory");

    BMI.style.color = "#64748b";
    BMI.textContent = "--";

    BMICategory.style.color = "#2563eb";
    BMICategory.textContent = "--";
  }, 30000);
}

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
}
