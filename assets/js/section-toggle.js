/**
 * SectionToggler - A class to handle expandable/collapsible sections
 * This module manages the toggling behavior for both main sections
 * and publication abstracts.
 */
class SectionToggler {
  /**
   * Create a new SectionToggler instance
   * @param {Object} options - Configuration options
   */
  constructor(options = {}) {
    // Config with defaults and overrides
    this.options = {
      sectionHeaderSelector: '.section-header',
      sectionContentSelector: '.section-content',
      abstractToggleSelector: '.abstract-toggle',
      publicationItemSelector: '.publication-item',
      publicationAbstractSelector: '.publication-abstract',
      activeClass: 'active',
      expandedClass: 'expanded',
      excludeSections: ['Resume'],
      ...options
    };
    
    // Initialize the toggler
    this.init();
  }
  
  /**
   * Initialize the toggler by caching DOM elements and setting up event listeners
   */
  init() {
    try {
      // Cache DOM elements
      this.headers = document.querySelectorAll(this.options.sectionHeaderSelector);
      this.contents = document.querySelectorAll(this.options.sectionContentSelector);
      
      // Set initial states for sections
      this.initializeSections();
      
      // Set up event delegation for section headers
      document.addEventListener('click', this.handleClick.bind(this));
    } catch (error) {
      console.error('Error initializing SectionToggler:', error);
    }
  }
  
  /**
   * Initialize all sections to their default state
   */
  initializeSections() {
    if (!this.headers || !this.contents) return;
    
    this.headers.forEach((header, index) => {
      const headerText = header.textContent.trim();
      
      // Check if this section should be excluded from auto-expansion
      if (!this.options.excludeSections.includes(headerText)) {
        header.classList.add(this.options.activeClass);
        if (this.contents[index]) {
          this.contents[index].classList.add(this.options.expandedClass);
        }
      }
    });
  }
  
  /**
   * Handle click events through delegation
   * @param {Event} event - The click event
   */
  handleClick(event) {
    const target = event.target;
    
    // Check if a section header was clicked
    if (target.classList.contains(this.options.sectionHeaderSelector.substring(1)) || 
        target.closest(this.options.sectionHeaderSelector)) {
      const header = target.classList.contains(this.options.sectionHeaderSelector.substring(1)) 
        ? target 
        : target.closest(this.options.sectionHeaderSelector);
      
      this.toggleSection(header);
    }
    
    // Check if an abstract toggle was clicked
    if (target.classList.contains(this.options.abstractToggleSelector.substring(1)) || 
        target.closest(this.options.abstractToggleSelector)) {
      const toggle = target.classList.contains(this.options.abstractToggleSelector.substring(1)) 
        ? target 
        : target.closest(this.options.abstractToggleSelector);
      
      this.toggleAbstract(toggle);
    }
  }
  
  /**
   * Toggle a section's expanded state
   * @param {HTMLElement} header - The section header element
   */
  toggleSection(header) {
    if (!header) return;
    
    // Toggle active class on the header
    header.classList.toggle(this.options.activeClass);
    
    // Find the corresponding content element
    const index = Array.from(this.headers).indexOf(header);
    if (index !== -1 && this.contents[index]) {
      // Toggle expanded class on the content
      this.contents[index].classList.toggle(this.options.expandedClass);
    }
  }
  
  /**
   * Toggle a publication abstract's expanded state
   * @param {HTMLElement} toggle - The abstract toggle button
   */
  toggleAbstract(toggle) {
    if (!toggle) return;
    
    // Toggle active class on the toggle button
    toggle.classList.toggle(this.options.activeClass);
    
    // Find the closest publication item
    const publicationItem = toggle.closest(this.options.publicationItemSelector);
    if (!publicationItem) return;
    
    // Find the abstract section within this publication item
    const abstract = publicationItem.querySelector(this.options.publicationAbstractSelector);
    if (abstract) {
      // Toggle expanded class on the abstract
      abstract.classList.toggle(this.options.expandedClass);
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initToggler);
} else {
  // DOM already loaded, initialize immediately
  initToggler();
}

/**
 * Initialize the SectionToggler instance
 */
function initToggler() {
  // Create singleton instance
  window.sectionToggler = new SectionToggler();
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SectionToggler;
}
