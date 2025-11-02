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
 
 const API_KEY = "AIzaSyBy4lDi44lfw9m0P7rVA9J5xCbuBP-zLOE";
  const CHANNEL_ID = "UCUfddVRF-bpl1UtOERW2afw";

  function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  }

  async function getSubscribers() {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`);
      const data = await response.json();
      const subs = data.items[0].statistics.subscriberCount;
      document.getElementById("count").textContent = formatNumber(subs);
    } catch (error) {
      document.getElementById("count").textContent = "Error";
      console.error(error);
    }
  }

  getSubscribers();
  setInterval(getSubscribers, 30000);