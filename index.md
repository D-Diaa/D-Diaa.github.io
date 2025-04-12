---
permalink: /

---

<main>
<section class="hero-section">
  <div class="hero-content">
    <div class="hero-text">
      <p>I am a Ph.D. student under the supervision of <a href="https://cs.uwaterloo.ca/~fkerschb/" target="_blank">Florian Kerschbaum</a>. I'm also a member of the <a href="https://crysp.uwaterloo.ca" target="_blank">Cryptography, Security, and Privacy (CrySP)</a> lab at the <a href="https://uwaterloo.ca" target="_blank">University of Waterloo</a>.</p>

      <p>I hold a Masters degree in Computer Science from the University of Waterloo and a Bachelor of Science in Computer Engineering and Mathematics from <a href="https://www.aucegypt.edu" target="_blank">The American University in Cairo</a>.</p>
    </div>
    <div class="hero-profile">
      <div class="hero-avatar">
        <img src="/assets/images/bio-photo.jpeg" alt="Abdulrahman Diaa" class="bio-photo">
      </div>
      <div class="hero-links">
        <a href="https://github.com/D-Diaa" class="social-link" target="_blank" aria-label="GitHub"><i class="fab fa-fw fa-github"></i></a>
        <a href="https://www.linkedin.com/in/abdulrahman-diaa-555300126/" class="social-link" target="_blank" aria-label="LinkedIn"><i class="fab fa-fw fa-linkedin"></i></a>
        <a href="https://scholar.google.com/citations?user=xFX1k1AAAAAJ" class="social-link" target="_blank" aria-label="Google Scholar"><i class="fas fa-fw fa-graduation-cap"></i></a>
        <a href="mailto:a2diaa@uwaterloo.ca" class="social-link" aria-label="Email"><i class="fas fa-fw fa-envelope"></i></a>
        <a href="/assets/resume.pdf" class="social-link" target="_blank" aria-label="Resume"><i class="fas fa-fw fa-file"></i></a>
      </div>
    </div>
  </div>
</section>

<h2><span class="section-header">Research</span></h2>

<section class="section-content">
  <div class="research-summary">
    <p>My research focuses on developing robust watermarking techniques for AI-generated content to combat misinformation and enhance digital trust. I explore adversarial vulnerabilities in current watermarking systems and design robust approaches that withstand targetted scrubbing attempts.</p>
    
    <p>I aim to establish watermarking as critical infrastructure for generative AI, ensuring accountability and trustworthiness across various applications.</p>
  </div>
</section>

<h2><span class="section-header">Publications</span></h2>

<section class="section-content">
  {% for publication in site.data.publications %}
    <article class="publication-wrapper">
      {% include publication-entry.html publication=publication %}
    </article>
  {% endfor %}
</section>

<h2><span class="section-header">Preprints</span></h2>

<section class="section-content">
  {% for publication in site.data.preprints %}
    <article class="publication-wrapper">
      {% include publication-entry.html publication=publication %}
    </article>
  {% endfor %}
</section>

<h2><span class="section-header">Resume</span></h2>

<section class="section-content">
  <div class="pdf-container">
    <iframe src="{{ site.baseurl }}/assets/resume.pdf" width="100%" height="800px" style="border: none;" title="Abdulrahman Diaa's Resume">
        This browser does not support PDFs. Please download the PDF to view it:
        <a href="{{ site.baseurl }}/assets/resume.pdf" class="paper-link">Download PDF</a>.
    </iframe>
  </div>
</section>
</main>
