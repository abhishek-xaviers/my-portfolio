// scripts/contact.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", (event) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Basic front-end validation
      if (!name || !email || !message) {
        alert("All fields are required!");
        event.preventDefault(); // Stop form submission
      }
      // If all fields are valid, the form will proceed to Formspree
    });
  });
  