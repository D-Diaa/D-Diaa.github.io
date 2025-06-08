// Adjust the CSS variable for masthead height based on actual element size
function updateMastheadOffset() {
  const masthead = document.querySelector('.masthead');
  if (!masthead) return;
  const height = masthead.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--masthead-height', `${height}px`);
}

// Update on load and when window resizes
window.addEventListener('DOMContentLoaded', updateMastheadOffset);
window.addEventListener('resize', updateMastheadOffset);
