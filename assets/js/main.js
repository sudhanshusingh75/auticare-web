document.addEventListener("DOMContentLoaded", () => {
  // Set document title with app name
  document.title = CONFIG.appName + " - " + (document.title.split(" - ")[1] || "Empowering Autism Care");

  // Update footer email
  const emailLinks = document.querySelectorAll("footer a");
  emailLinks.forEach(link => {
    link.href = `mailto:${CONFIG.contactEmail}`;
    link.textContent = CONFIG.contactEmail;
  });

  // Update navigation links with baseUrl
  const navHome = document.querySelector(".nav-home");
  const navTerms = document.querySelector(".nav-terms");
  const navPrivacy = document.querySelector(".nav-privacy");
  const navContact = document.querySelector(".nav-contact");

  if (navHome) navHome.href = CONFIG.baseUrl + CONFIG.homeUrl;
  if (navTerms) navTerms.href = CONFIG.baseUrl + "terms-and-conditions/";
  if (navPrivacy) navPrivacy.href = CONFIG.baseUrl + "privacy-policy/";
  if (navContact) navContact.href = CONFIG.baseUrl + "contact-us/";

  // Highlight active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll("nav a").forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (currentPath === CONFIG.baseUrl && linkPath === CONFIG.baseUrl + CONFIG.homeUrl)) {
      link.classList.add("active");
    }
  });
});

function submitContactForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  // For GitHub Pages, redirect to mailto
  window.location.href = `mailto:${CONFIG.contactEmail}?subject=Contact from ${name} (${email})&body=${encodeURIComponent(message)}`;
}