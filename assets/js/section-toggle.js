document.addEventListener('DOMContentLoaded', function() {
  // Initialize all sections as collapsed except the first one
  const headers = document.querySelectorAll('.section-header');
  const contents = document.querySelectorAll('.section-content');
  
  // Expand the first section by default
  if (headers.length > 0) {
    headers[0].classList.add('active');
    contents[0].classList.add('expanded');
  }
  
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
