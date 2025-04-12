/**
 * Theme Toggle Functionality
 * Handles switching between light and dark themes
 */

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const storedTheme = localStorage.getItem('theme');
  
  // Apply stored theme preference or default to dark
  if (storedTheme === 'light') {
    htmlElement.setAttribute('data-theme', 'light');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    if (htmlElement.getAttribute('data-theme') === 'light') {
      // Switch to dark theme
      htmlElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      // Switch to light theme
      htmlElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
});
