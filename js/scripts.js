// Smooth scroll for sidebar links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
// Typing animation for the intro text
const words = ["An Engineer", "A Coder", "A Problem Solver", "A Curious Mind"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;
let typeSpeed = 100;

function type() {
  const typewriter = document.getElementById('typewriter');

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j);
      typewriter.innerHTML = currentWord;
      j++;
    }

    if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j);
      typewriter.innerHTML = currentWord;
      j--;
    }

    if (j === words[i].length) {
      isDeleting = true;
      typeSpeed = 125; // Speed up when deleting
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      typeSpeed = 150; // Restore normal speed after deletion
    }

    if (i === words.length) {
      i = 0; // Restart the typing animation when all words are done
    }
  }

  setTimeout(type, typeSpeed);
}

// Start the typing effect when the page loads
window.onload = () => {
  type();
};



// Function to initialize Vanta.js when a section becomes visible
function applyVantaEffect(section) {
  window.VANTA.NET({
    el: section,  // The section element to apply Vanta.js
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xc70524,
    backgroundColor: 0xd0d40,
    points: 10.00,    // Reduced for better performance
    spacing: 18.00,  // Increase spacing for better performance
  });
}

// Intersection Observer setup
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.vantaApplied) {
      entry.target.vantaApplied = true;  // Flag to ensure it's only applied once
      applyVantaEffect(entry.target);    // Apply Vanta.js to the visible section
    }
  });
});

// Observe all sections with the 'vanta-section' class
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
