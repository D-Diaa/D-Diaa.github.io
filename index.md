---
permalink: /

---

<div class="intro-section">
  <p>I am a Ph.D. student under the supervision of <a href="https://cs.uwaterloo.ca/~fkerschb/" target="_blank">Florian Kerschbaum</a>. I'm also a member of the <a href="https://crysp.uwaterloo.ca" target="_blank">Cryptography, Security, and Privacy (CrySP)</a> lab at the <a href="https://uwaterloo.ca" target="_blank">University of Waterloo</a>.</p>

  <p>I hold a Masters degree in Computer Science from the University of Waterloo and a Bachelor of Science in Computer Engineering and Mathematics from <a href="https://www.aucegypt.edu" target="_blank">The American University in Cairo</a>.</p>
</div>

## <span class="section-header">Research</span>

<div class="section-content">
  <div class="research-summary">
    <p>My research focuses on developing robust watermarking techniques for AI-generated content to combat misinformation and enhance digital trust. I explore adversarial vulnerabilities in current watermarking systems and design robust approaches that withstand targetted scrubbing attempts.</p>
    
    <p>I aim to establish watermarking as critical infrastructure for generative AI, ensuring accountability and trustworthiness across various applications.</p>
  </div>
</div>

## <span class="section-header">Publications</span>

<div class="section-content">
  {% for publication in site.data.publications %}
    {% include publication-entry.html publication=publication %}
  {% endfor %}
</div>

## <span class="section-header">Preprints</span>

<div class="section-content">
  {% for publication in site.data.preprints %}
    {% include publication-entry.html publication=publication %}
  {% endfor %}
</div>

## <span class="section-header">Resume</span>

<div class="section-content">
  <div class="pdf-container">
    <iframe src="{{ site.baseurl }}/assets/resume.pdf" width="100%" height="800px" style="border: none;">
        This browser does not support PDFs. Please download the PDF to view it:
        <a href="{{ site.baseurl }}/assets/resume.pdf" class="paper-link">Download PDF</a>.
    </iframe>
  </div>
</div>
