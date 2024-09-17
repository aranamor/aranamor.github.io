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