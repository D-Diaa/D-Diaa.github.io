---
permalink: /

---

<main>
<section class="hero-section">
  <div class="hero-content">
    <div class="hero-text">
      <p>I am a Ph.D. student under the supervision of <a href="https://cs.uwaterloo.ca/~fkerschb/" target="_blank">Florian Kerschbaum</a>. I'm also a member of the <a href="https://crysp.uwaterloo.ca" target="_blank">Cryptography, Security, and Privacy (CrySP)</a> lab at the <a href="https://uwaterloo.ca" target="_blank">University of Waterloo</a>. I hold a Masters degree in Computer Science from the University of Waterloo and a Bachelor of Science in Computer Engineering and Mathematics from <a href="https://www.aucegypt.edu" target="_blank">The American University in Cairo</a>.</p>
    </div>
    <div class="hero-profile">
      <div class="hero-avatar">
        <img src="/assets/images/bio-photo.jpeg" alt="Abdulrahman Diaa" class="bio-photo">
      </div>
    </div>
  </div>
</section>

<h2 id="research"><span class="section-header">Research</span></h2>

<section class="section-content">
  <div class="research-summary">
    <p>My research focuses on developing robust watermarking techniques for AI-generated content to combat misinformation and enhance digital trust. I explore adversarial vulnerabilities in current watermarking systems and design robust approaches that withstand targetted scrubbing attempts. I aim to establish watermarking as critical infrastructure for generative AI, ensuring accountability and trustworthiness across various applications.</p>
  </div>
</section>

<h2 id="publications"><span class="section-header">Publications</span></h2>

<section class="section-content">
  {% for publication in site.data.publications %}
    <article class="publication-wrapper">
      {% include publication-entry.html publication=publication %}
    </article>
  {% endfor %}
</section>

<h2 id="preprints"><span class="section-header">Preprints</span></h2>

<section class="section-content">
  {% for publication in site.data.preprints %}
    <article class="publication-wrapper">
      {% include publication-entry.html publication=publication %}
    </article>
  {% endfor %}
</section>

<h2 id="resume"><span class="section-header">Resume</span></h2>

<section class="section-content">
  <div class="resume-container">
    <div class="resume-card">
      <div class="resume-preview-container">
        <div class="resume-thumbnail" aria-label="Resume preview image">
          <div class="resume-overlay">
            <span class="click-to-view">Click to view full resume</span>
          </div>
          <img src="{{ site.baseurl }}/assets/images/resume-thumbnail.png" alt="Resume thumbnail" class="resume-thumbnail-img" loading="lazy">
        </div>
      </div>
      <div class="resume-actions">
        <a href="{{ site.baseurl }}/assets/resume.pdf" class="download-button" download>
          <i class="fas fa-download"></i> Download Resume
        </a>
        <a href="{{ site.baseurl }}/assets/resume.pdf" class="view-button" target="_blank">
          <i class="fas fa-eye"></i> View Resume
        </a>
      </div>
    </div>
  </div>
</section>
</main>
