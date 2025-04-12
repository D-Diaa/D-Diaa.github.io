# Website Maintenance Guide

This guide explains how to maintain and update the content on your academic website.

## Adding New Publications or Preprints

The website now uses a data-driven approach for publications and preprints, making it much easier to add new entries without editing HTML directly.

### To add a new publication:

1. Open the `_data/publications.yml` file
2. Add a new entry following this format:

```yaml
- authors:
    - name: "A. Author"
      highlight: false
    - name: "B. Author"
      highlight: true  # Set to true for your name
    - name: "C. Author"
      highlight: false
  title: "Your Paper Title"
  venue: "Conference or Journal Name"  # Only for publications
  year: 2024
  links:
    - type: "paper"
      url: "https://link-to-paper.com"
      label: "Paper"
    - type: "code"
      url: "https://github.com/username/repo"
      label: "Code"
    # Add more links as needed (e.g., slides, video, etc.)
```

### To add a new preprint:

1. Open the `_data/preprints.yml` file
2. Add a new entry following the same format as publications (omit the venue field if not applicable)

## Website Structure

- `_data/`: Contains YAML files with structured data
  - `publications.yml`: Published papers
  - `preprints.yml`: Preprint papers
- `_includes/`: Contains reusable HTML templates
  - `publication-entry.html`: Template for rendering publications
- `assets/`: Contains static files (CSS, JavaScript, images, etc.)
  - `js/section-toggle.js`: Controls the expandable sections

## Tips

- Always set `highlight: true` for your name in the authors list
- Keep the YAML indentation consistent (use spaces, not tabs)
- For mathematical notation in titles, use LaTeX syntax with dollar signs (e.g., `$k$-Means`)
- The website will automatically format the entries consistently
