 // Theme Toggle
    const toggleBtn = document.getElementById('themeToggle');
    toggleBtn.addEventListener('click', () => {
      document.body.dataset.theme =
        document.body.dataset.theme === "dark" ? "light" : "dark";
      toggleBtn.textContent =
        document.body.dataset.theme === "dark" ? "☀️" : "🌙";
    });
      function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}
