# abdulrahmandiaa.ca

Academic portfolio site built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) v4.

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build for production (output: dist/)
npm run preview    # Preview production build
```

## Adding Publications

Edit `src/data/publications.yml` (or `preprints.yml`):

```yaml
- authors:
    - name: "A. Author"
      highlight: false
    - name: "Your Name"
      highlight: true
  title: "Paper Title"
  venue: "Conference or Journal"
  year: 2025
  citation:
    type: inproceedings
    key: author2025shorttitle
    authors:
      - Full Author Name
      - Your Full Name
    booktitle: "Official Proceedings Name"
    pages: "1--20"
    publisher: "Publisher"
    url: "https://official-publication-page.example"
  abstract: "Optional abstract text..."
  links:
    - type: "paper"
      url: "https://arxiv.org/abs/..."
      label: "Paper"
    - type: "code"
      url: "https://github.com/..."
      label: "Code"
  highlights:
    - "Best Paper Award"
```

## Deployment

Pushes to `main` trigger automatic deployment to GitHub Pages via GitHub Actions.
