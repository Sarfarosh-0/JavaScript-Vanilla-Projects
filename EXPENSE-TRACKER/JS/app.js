const transactionsSection = document.getElementById("transactions");
const transactionsHistory = document.getElementById("transactionsHistory");
const modalOverlay = document.getElementById("modalOverlay");
const tableTitle = document.getElementById("tableTitle");
const viewAllBtn = document.getElementById("viewAllBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

let firstState = null;

viewAllBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // 1. FIRST: Record current bounding box coordinates 
  firstState = transactionsSection.getBoundingClientRect();

  // Disable global animations temporarily while making structural changes
  transactionsSection.classList.add("duration-0");

  // 2. LAST: Inject full screen presentation layer layout attributes
  transactionsSection.classList.add("fixed", "z-50", "shadow-2xl");
  transactionsSection.style.top = "7.5vh";
  transactionsSection.style.left = "5vw";
  transactionsSection.style.width = "90vw";
  transactionsSection.style.height = "85vh";
  transactionsSection.classList.remove("min-h-[384px]");

  transactionsHistory.classList.add("flex-grow", "overflow-y-auto");
  transactionsHistory.classList.remove("max-h-[320px]", "overflow-hidden");

  // 3. INVERT: Measure new footprint and calculate coordinate scale differentials
  const lastState = transactionsSection.getBoundingClientRect();
  const invertX = firstState.left - lastState.left;
  const invertY = firstState.top - lastState.top;
  const invertScaleX = firstState.width / lastState.width;
  const invertScaleY = firstState.height / lastState.height;

  // Apply inverse transforms to force container visually back into initial dimensions
  transactionsSection.style.transform = `translate(${invertX}px, ${invertY}px) scale(${invertScaleX}, ${invertScaleY})`;

  // 4. PLAY: Wait one animation frame, reactivate transitions, and release constraints
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      transactionsSection.classList.remove("duration-0");
      transactionsSection.style.transform = "none"; // Animates seamlessly to full screen size

      // Trigger backdrop dimming and blur effects
      modalOverlay.className = "fixed inset-0 bg-black/60 backdrop-blur-md pointer-events-auto z-40 transition-all duration-500 ease-out";
      
      // Update typography states and action triggers
      tableTitle.textContent = "All Transactions";
      viewAllBtn.classList.add("hidden");
      closeModalBtn.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    });
  });
});

closeModalBtn.addEventListener("click", () => {
  if (!firstState) return;

  // 1. Measure full dimensions before collapse
  const lastState = transactionsSection.getBoundingClientRect();

  // Disable global animation classes momentarily
  transactionsSection.classList.add("duration-0");

  // Remove sizing style overrides to let browser check dashboard layout constraints
  transactionsSection.style.top = "";
  transactionsSection.style.left = "";
  transactionsSection.style.width = "";
  transactionsSection.style.height = "";
  transactionsSection.classList.remove("fixed", "z-50", "shadow-2xl");
  transactionsSection.classList.add("min-h-[384px]");

  transactionsHistory.classList.remove("flex-grow", "overflow-y-auto");
  transactionsHistory.classList.add("max-h-[320px]", "overflow-hidden");

  // 2. Measure dashboard coordinates baseline values
  const currentDashboardState = transactionsSection.getBoundingClientRect();
  
  // Calculate relative invert positions to scale back down
  const invertX = lastState.left - currentDashboardState.left;
  const invertY = lastState.top - currentDashboardState.top;
  const invertScaleX = lastState.width / currentDashboardState.width;
  const invertScaleY = lastState.height / currentDashboardState.height;

  // Reapply full-screen dimensions as a transform starting frame
  transactionsSection.classList.add("fixed", "z-50", "shadow-2xl");
  transactionsSection.style.top = `${currentDashboardState.top}px`;
  transactionsSection.style.left = `${currentDashboardState.left}px`;
  transactionsSection.style.width = `${currentDashboardState.width}px`;
  transactionsSection.style.height = `${currentDashboardState.height}px`;
  transactionsSection.style.transform = `translate(${invertX}px, ${invertY}px) scale(${invertScaleX}, ${invertScaleY})`;

  // 3. Trigger transition interpolation to collapse container smoothly
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      transactionsSection.classList.remove("duration-0");
      transactionsSection.style.transform = "none";
      transactionsSection.style.top = "";
      transactionsSection.style.left = "";
      transactionsSection.style.width = "";
      transactionsSection.style.height = "";
      
      // Clean structure attributes entirely after transform settles down
      setTimeout(() => {
        transactionsSection.classList.remove("fixed", "z-50", "shadow-2xl");
      }, 500);

      // Fade out background shielding masks
      modalOverlay.className = "fixed inset-0 bg-black/0 backdrop-blur-0 pointer-events-none transition-all duration-500 ease-out z-40";

      // Reset application control states
      tableTitle.textContent = "Recent Transactions";
      viewAllBtn.classList.remove("hidden");
      closeModalBtn.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    });
  });
});
