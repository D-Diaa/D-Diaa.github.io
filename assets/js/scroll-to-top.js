// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
    // Use opacity for fade-in effect if desired (requires CSS transition)
    // scrollToTopBtn.style.opacity = "1"; 
  } else {
    scrollToTopBtn.style.display = "none";
    // Use opacity for fade-out effect if desired
    // scrollToTopBtn.style.opacity = "0"; 
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener('click', function() {
  // Use smooth scrolling
  window.scrollTo({top: 0, behavior: 'smooth'});
});
