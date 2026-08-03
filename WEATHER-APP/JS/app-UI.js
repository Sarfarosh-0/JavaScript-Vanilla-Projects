function UpdateDate() {
  const date = new Date();
  document.getElementById("Month").textContent = date.toLocaleDateString(
    "en-us",
    { month: "long" },
  );
  document.getElementById("Date").textContent = date.getDate() + ",";
  document.getElementById("Year").textContent = date.getFullYear();
  document.getElementById("WeekDay").textContent = date.toLocaleDateString(
    "en-us",
    { weekday: "long" },
  );
}

UpdateDate();
setInterval(UpdateDate, 60000);

function UpdateClock() {
  const date = new Date();
  document.getElementById("Hour").textContent = String(
    date.getHours(),
  ).padStart(2, "0");
  document.getElementById("Minutes").textContent = String(
    date.getMinutes(),
  ).padStart(2, "0");
}

UpdateClock();
setInterval(UpdateClock, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#mobile-footer .nav-link");

  const activeClasses = ["bg-indigo-950", "text-indigo-400", "rounded-xl"];
  const inactiveClasses = ["text-slate-400", "hover:text-indigo-400"];

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // 1. Reset all links to inactive state
      navLinks.forEach((item) => {
        item.classList.remove(...activeClasses);
        item.classList.add(...inactiveClasses);

        const label = item.querySelector("span");
        if (label) label.classList.add("hidden");
      });

      // 2. Set clicked link to active state
      this.classList.remove(...inactiveClasses);
      this.classList.add(...activeClasses);

      // 3. Show active link text label
      const activeLabel = this.querySelector("span");
      if (activeLabel) activeLabel.classList.remove("hidden");
    });
  });
});
