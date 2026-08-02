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
  const activeBgClasses = ["bg-sky-100", "text-sky-600", "rounded-xl"];
  const inactiveTextClass = "text-slate-500";

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // 1. Reset all links
      navLinks.forEach((item) => {
        item.classList.remove(...activeBgClasses);
        item.classList.add(inactiveTextClass);

        const label = item.querySelector("span");
        if (label) label.classList.add("hidden");
      });

      // 2. Set clicked link to active
      this.classList.remove(inactiveTextClass);
      this.classList.add(...activeBgClasses);

      // 3. Show text label
      const activeLabel = this.querySelector("span");
      if (activeLabel) activeLabel.classList.remove("hidden");
    });
  });
});
