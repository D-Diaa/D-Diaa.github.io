document.addEventListener('DOMContentLoaded', function() {
  // Initialize all sections as expanded by default, except the resume section
  const headers = document.querySelectorAll('.section-header');
  const contents = document.querySelectorAll('.section-content');
  
  // Expand all sections by default
  headers.forEach(function(header, index) {
    // Check if this is the Resume section
    if (header.textContent.trim() === 'Resume') {
      // Don't expand the Resume section
    } else {
      // Expand all other sections
      header.classList.add('active');
      contents[index].classList.add('expanded');
    }
  });
  
  // Add click event listeners to all section headers
  headers.forEach(function(header, index) {
    header.addEventListener('click', function() {
      // Toggle active class on the header
      this.classList.toggle('active');
      
      // Toggle expanded class on the corresponding content
      contents[index].classList.toggle('expanded');
    });
  });
  
  // Handle abstract toggles for publications
  const abstractToggles = document.querySelectorAll('.abstract-toggle');
  
  abstractToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      // Toggle active class on the toggle button
      this.classList.toggle('active');
      
      // Find the closest publication item
      const publicationItem = this.closest('.publication-item');
      
      // Find the abstract section within this publication item
      const abstract = publicationItem.querySelector('.publication-abstract');
      
      // Toggle expanded class on the abstract
      if (abstract) {
        abstract.classList.toggle('expanded');
      }
    });
  });
});
