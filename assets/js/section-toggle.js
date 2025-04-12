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
});
