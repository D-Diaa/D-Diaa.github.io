/**
 * BibTeX Export Functionality
 * Adds clipboard copy functionality to BibTeX buttons
 */
document.addEventListener('DOMContentLoaded', function() {
  // Add click event listeners to BibTeX buttons
  document.querySelectorAll('.bibtex-button').forEach(button => {
    button.addEventListener('click', function() {
      const bibtex = generateBibtex(this.dataset);
      
      // Copy to clipboard
      navigator.clipboard.writeText(bibtex).then(() => {
        showToast('Citation copied to clipboard!');
      }).catch(err => {
        console.error('Could not copy text: ', err);
        showToast('Failed to copy citation', true);
      });
    });
  });
  
  // Format publication data as BibTeX
  function generateBibtex(dataset) {
    // Get data from dataset attributes
    const authors = dataset.authors.split('|');
    const title = dataset.title;
    const venue = dataset.venue;
    const year = dataset.year;
    const url = dataset.url;
    
    // Create citation key from first author's last name, year, and first word of title
    const firstAuthor = authors[0];
    const lastName = firstAuthor.split(' ').pop().replace(/[.,]/g, ''); // Remove dots and commas
    const firstWord = title.split(' ')[0].replace(/[^a-zA-Z0-9]/g, ''); // Get first word, remove non-alphanumeric
    const citationKey = `${lastName}${year}${firstWord}`;
    
    // Start building BibTeX entry
    let bibtex = `@${venue ? 'article' : 'unpublished'}{${citationKey},\n`;
    
    // Add authors
    bibtex += `  author = {${authors.join(' and ')}},\n`;
    
    // Add title
    bibtex += `  title = {${title}},\n`;
    
    // Add venue if available
    if (venue) {
      bibtex += `  journal = {${venue}},\n`;
    }
    
    // Add year
    bibtex += `  year = {${year}},\n`;
    
    // Add URL if available
    if (url) {
      bibtex += `  url = {${url}},\n`;
    }
    
    // Close the entry
    bibtex += `}`;
    
    return bibtex;
  }
  
  // Show toast notification
  function showToast(message, isError = false) {
    // Remove any existing toast
    const existingToast = document.querySelector('.clipboard-toast');
    if (existingToast) {
      existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'clipboard-toast' + (isError ? ' error' : '');
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Hide and remove toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
});
