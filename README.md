# 🚀 JavaScript Vanilla Projects

A production-grade, highly polished showcase of native frontend solutions built purely with vanilla **HTML5**, **CSS3 / Tailwind CSS v4**, and modern **ES6+ JavaScript**. This monorepo serves as an engineering portfolio demonstrating advanced DOM manipulation, state architecture, browser APIs, asynchronous control flow, and clean component organization without the overhead of heavy frameworks.

---

## 🛠️ Core Engineering & Architecture Principles

*   **Zero Framework Overhead:** Pure JavaScript rendering, avoiding virtual DOM performance tax.
*   **State-Driven UI Updates:** Applications like *To-Do App v2* and *Expense Tracker* decouple UI rendering from data mutations using unified array states synced to `localStorage`.
*   **Adaptive Responsive Layouts:** Responsive layouts using fluid variables (`clamp()`), flexboxes, grids, and advanced CSS custom properties.
*   **Event Delegation & Performance:** Highly optimized event listeners, keyboard action interceptors, and strict cleanups to prevent memory leaks.

---

## 📂 Portfolio Project Directory

The repository features **11 custom projects** demonstrating a wide range of frontend engineering challenges. Below is an exhaustive breakdown of the codebase architecture and local entry points:

| Project Directory | Local Entry Point | Technical Summary & Architecture | Key Core JS Concepts Demonstrated |
| :--- | :--- | :--- | :--- |
| **`EXPENSE-TRACKER`** | [`Live Link`](https://stellar-basbousa-142e5f.netlify.app/#overview) | **Decoupled Financial Ledger**<br>An app split into logical modules: storage interface, ledger calculations, and dynamic layout templates. Employs transaction tracking with state logging. | • ES6 Modular architecture <br>• Structural Data mapping <br>• Reducer-like calculation pipelines <br>• Form Submission Management |
| **`02-TO-DO-APP`** | [`/index.html`](./02-TO-DO-APP/index.html) | **Unified State To-Do Engine**<br>A comprehensive app utilizing centralized array state tracking. Features complete state syncing to browser persistent memory, multiple active filters (All / Active / Completed), and a dynamic task counter. Includes a global dark/light theme mechanism. | • `localStorage` Persistence <br>• Array mutation (`splice`, `push`) <br>• Array Filtering (`filter`) <br>• Dynamic theme injection via HTML attributes |
| **`CALCULATOR`** | [`/index.html`](./CALCULATOR/index.html) | **Tailwind-Powered Computational Grid**<br>An interface designed around high-precision button triggers. Styled completely using modern Tailwind CSS v4 utility states. Employs advanced active-state selectors for glowing neon borders and a dual-display arithmetic layout. | • Tailwind v4 utility workflow <br>• Expression Evaluation <br>• Advanced keyboard/mouse input validation <br>• Precision Float Arithmetic |
| **`BMI-CALCULATOR`** | [`/index.html`](./BMI-CALCULATOR/index.html) | **Biometric Indexing Dashboard**<br>A medical biometric utility featuring multi-unit conversions. Seamlessly handles automatic dropdown unit synchronization, fractional string-splitting to parse complex compound feet/inches configurations, and dynamic color categorizations. Includes an automated dashboard state reset after 30 seconds of inactivity. | • Compound String Parsing <br>• Custom input validation <br>• UI Asynchronous schedules (`setTimeout`/`clearTimeout`) <br>• Complex Conic-Gradients |
| **`ROCK-PAPER-SCISSORS`**| [`/index.html`](./ROCK-PAPER-SCISSORS/index.html) | **Matrix-Based Game Engine**<br>Evaluates choice combinations against randomized opponent outputs using array indexing. | • Matrix combinations lookup <br>• Probability generation (`Math.random`) <br>• Dynamic score updates |
| **`NUMBER-GUESSING-GAME`**| [`/index.html`](./NUMBER-GUESSING-GAME/index.html) | **State-Tracking Interactive Game**<br>Tracks dynamic ranges, counts historical attempts, and generates smart user feedback loops. | • Dynamic Range tracking <br>• Random integer calculations <br>• Session state logging |
| **`DIGITAL-CLOCK`** | [`/index.html`](./DIGITAL-CLOCK/index.html) | **Asynchronous Chronological Render**<br>Real-time high-precision system clock. Polls system time and outputs dynamic locale-specific strings. | • Native `Date` objects <br>• Repetitive async routines (`setInterval`) <br>• String padding formatting |
| **`LOGIN-SIGNUP-PAGE`**| [`/index.html`](./LOGIN-SIGNUP-PAGE/index.html) | **Client-Side Authorization UI**<br>Mock dual-page authentication flow. Validates email structures, checks password security, and matches confirmation states in real-time. | • Regular Expression validation <br>• Preventative Event Hijacking (`preventDefault`) <br>• Multi-page routing patterns |
| **`COLOR-CHANGER-2`**| [`/index.html`](./COLOR-CHANGER-2/index.html) | **Dynamic Palette Generator**<br>Interactive system color picker and modifier to test visual palette properties directly in the browser viewport. | • Random Color Space Generation <br>• Event bubbling optimization |
| **`COLOR-CHANGER-1`**| [`/index.html`](./COLOR-CHANGER-1/index.html) | **High-Frequency Hex & Hue Engines**<br>Dynamic CSS landscape manipulation engines that generate random palette codes or toggle mapped body backgrounds. | • Math formulation (hex strings) <br>• High frequency DOM style updating <br>• Dynamic class binding |
| **`COUNTER-APP`** | [`/index.html`](./COUNTER-APP/index.html) | **Interactive Numeric Incrementer**<br>An atomic counter demonstrating state modification, tracking visual thresholds (under zero/above bounds), and updating visual styles dynamically. | • Mapped State Modification <br>• UI threshold evaluation <br>• Class toggling based on numeric signs |
| **`01-TO-DO-APP`** | [`/index.html`](./01-TO-DO-APP/index.html) | **Atomic Dom Manipulation List App**<br>A lightweight task tracking UI. Directly mutates individual DOM nodes to append checks, task text, and delete commands. Uses native sibling selectors for line-through. | • Direct Node Injection (`createElement`) <br>• Event Handling (`click`) <br>• Element Traversal (`closest("li")`) <br>• Input sanitization (`trim()`) |



---

## ⚡ Tech Stack

*   **Frontend Foundations:** HTML5 (Semantic Structure, Accessible UI Layouts), CSS3 (CSS Variables/Theming, CSS Grid, Flexbox layouts, transition animations, `@page` & Conic-Gradients).
*   **CSS Compiler / Framework:** Tailwind CSS v4.3.3 (Modern @import pipeline, modular layer structures).
*   **Modern JS Paradigms (ES6+):**
    *   Stateful client caching via `localStorage` API.
    *   Dynamic, non-destructive DOM generation (`document.createElement`, `append()`).
    *   State-driven list filtering.
    *   Robust validation systems (String regex matching, metric splits, input sanitization).

---

## 🚀 Quick Start & Runtime Environment

### Local Setup

To clone and explore the applications locally, execute the following commands in your terminal:

```bash
# Clone this repository
git clone https://github.com/Sarfarosh-0/JavaScript-Vanilla-Projects.git

# Navigate into the project directory
cd JavaScript-Vanilla-Projects
```

### Running the Projects

Since all applications are built using client-side vanilla JavaScript, they do not require complex Node.js build configurations. You can run them using one of the methods below:

#### Method 1: Local Entry Point Links (Easiest)
You can directly open the relative entry points from the table above inside your editor (like VS Code), or run a simple local HTTP server.

#### Method 2: VS Code Live Server Extension (Recommended)
For an optimized workflow with Hot Reloading and proper routing support:
1. Open the repository in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Click the **Go Live** button in the bottom right corner of your VS Code status bar.

---

## 🤝 Contribution Guidelines

Contributions are welcome! If you want to improve any of the existing projects or add new vanilla JS utilities, follow these steps:
1. Fork the Repository.
2. Create your Feature Branch (`git checkout -b feature/NewVanillaApp`).
3. Commit your Changes (`git commit -m 'Add New Vanilla JS App'`).
4. Push to the Branch (`git push origin feature/NewVanillaApp`).
5. Open a Pull Request.

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

Copyright (c) 2026 **Sarfarosh-0**.
