const stylesheet = /** @type {HTMLElement} */ (
  document.getElementById("prism")
);
const toggleBtn = /** @type {HTMLElement} */ (
  document.getElementById("toggle-btn")
);

/**
 * Set the theme to either light or dark.
 * @param {boolean} isDark
 */
function setTheme(isDark) {
  if (isDark) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
    toggleBtn.innerHTML = "☀️";
    toggleBtn.setAttribute("aria-label", "enable light theme");
    stylesheet.setAttribute("href", "/prism-tomorrow.css");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
    toggleBtn.innerHTML = "🌙";
    toggleBtn.setAttribute("aria-label", "enable dark theme");
    stylesheet.setAttribute("href", "/prism-coy.css");
  }
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "dark") {
    setTheme(false);
  } else {
    setTheme(true);
  }
}

if (!localStorage.getItem("theme")) {
  const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.setItem("theme", osTheme);
}

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleTheme();
});
setTheme(localStorage.getItem("theme") === "dark");
