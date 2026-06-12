console.log("COLOR GENERATOR STARTED");

const colors = [
  "#FF5733",
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#9D4EDD",
  "#F72585",
  "#7209B7",
  "#3A86FF",
  "#06D6A0",

  "#118AB2",
  "#EF476F",
  "#073B4C",
  "#8338EC",
  "#FB5607",
  "#FFBE0B",
  "#00B4D8",
  "#48CAE4",
  "#90E0EF",
  "#2A9D8F",

  "#264653",
  "#E76F51",
  "#E63946",
  "#F4A261",
  "#8D99AE",
  "#2B2D42",
  "#00F5D4",
  "#7B2CBF",
  "#C77DFF",
  "#FF99C8",

  "#B8F2E6",
  "#A0C4FF",
  "#D8F3DC",
  "#F8F9FA",
  "#343A40",
  "#495057",
  "#52B788",
  "#40916C",
  "#1B4332",
  "#FF9F1C",

  "#E71D36",
  "#011627",
  "#5E60CE",
  "#64DFDF",
  "#80FFDB",
  "#7400B8",
  "#6930C3",
  "#5390D9",
  "#56CFE1",
  "#72EFDD",

  "#FFADAD",
  "#FFD6A5",
  "#FDFFB6",
  "#CAFFBF",
  "#9BF6FF",
  "#A0C4FF",
  "#BDB2FF",
  "#FFC6FF",
  "#F1C0E8",
  "#CFBAF0",

  "#A3C4F3",
  "#90DBF4",
  "#8EECF5",
  "#98F5E1",
  "#B9FBC0",
  "#03045E",
  "#023E8A",
  "#0077B6",
  "#0096C7",
  "#00B4D8",

  "#48CAE4",
  "#90E0EF",
  "#ADE8F4",
  "#CAF0F8",
  "#001219",
  "#005F73",
  "#0A9396",
  "#94D2BD",
  "#E9D8A6",
  "#EE9B00",

  "#CA6702",
  "#BB3E03",
  "#AE2012",
  "#9B2226",
  "#6A040F",
  "#DC2F02",
  "#E85D04",
  "#F48C06",
  "#FAA307",
  "#FFBA08",

  "#D00000",
  "#DC2F02",
  "#E5383B",
  "#BA181B",
  "#660708",
  "#606C38",
  "#283618",
  "#FEFAE0",
  "#DDA15E",
  "#BC6C25",

  "#386641",
  "#6A994E",
  "#A7C957",
  "#F2E8CF",
  "#BC4749",
  "#FF006E",
  "#FB5607",
  "#FFBE0B",
  "#8338EC",
  "#3A86FF",

  "#FF4D6D",
  "#FF758F",
  "#FF8FA3",
  "#FFB3C1",
  "#FFCCD5",
  "#CDB4DB",
  "#FFC8DD",
  "#FFAFCC",
  "#BDE0FE",
  "#A2D2FF",

  "#22223B",
  "#4A4E69",
  "#9A8C98",
  "#C9ADA7",
  "#F2E9E4",
  "#2EC4B6",
  "#CBF3F0",
  "#FFBF69",
  "#FF9F1C",
  "#E71D36",

  "#2D6A4F",
  "#40916C",
  "#52B788",
  "#74C69D",
  "#95D5B2",
  "#F94144",
  "#F3722C",
  "#F8961E",
  "#F9844A",
  "#F9C74F",

  "#90BE6D",
  "#43AA8B",
  "#4D908E",
  "#577590",
  "#277DA1",
];

document
  .getElementById("GenerateBtn")
  .addEventListener("click", function RandomColor() {
    let color = Math.floor(Math.random() * 145);
    let HexCode = colors[color];
    document.getElementById("PreviewBody").style.backgroundColor =
      colors[color];
    // document.getElementById('CopyCode').style.backgroundColor = colors[color];
    document.getElementById("HEXCode").textContent = colors[color];
  });

document
  .getElementById("CopyCode")
  .addEventListener("click", async function copyToClipboard() {
    let HexCode = document.getElementById("HEXCode").textContent;
    try {
      await navigator.clipboard.writeText(HexCode);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  });
