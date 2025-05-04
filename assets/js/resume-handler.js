// Lazy load the resume section when user scrolls near it
document.addEventListener('DOMContentLoaded', function() {
  const resumeSection = document.getElementById('resume');
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Preload the PDF when user gets close to the resume section
        const link = document.createElement('link');
        link.rel = 'prefetch';
        // Note: Jekyll variables like {{ site.baseurl }} won't work here directly.
        // Assuming baseurl is "" based on _config.yml, so the path is correct.
        // If baseurl changes, this path might need adjustment or a different approach.
        link.href = '/assets/resume.pdf'; 
        document.head.appendChild(link);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    rootMargin: '200px 0px'
  });

  if (resumeSection) {
    observer.observe(resumeSection);
  }

  // Open PDF in new tab when clicking on thumbnail
  const resumeThumbnail = document.querySelector('.resume-thumbnail');
  if (resumeThumbnail) {
    resumeThumbnail.addEventListener('click', function() {
      // Assuming baseurl is ""
      window.open('/assets/resume.pdf', '_blank');
    });
  }
});
