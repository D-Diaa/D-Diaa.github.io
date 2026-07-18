export const siteConfig = {
  title: "Abdulrahman Diaa",
  shortTitle: "Diaa",
  description:
    "PhD candidate researching privacy-preserving machine learning and content watermarking at the University of Waterloo.",
  url: "https://abdulrahmandiaa.ca",
  email: "a2diaa@uwaterloo.ca",
  image: "/images/bio-photo.jpeg",
  author: {
    name: "Abdulrahman Diaa",
    jobTitle: "PhD candidate",
    organization: {
      name: "University of Waterloo",
      url: "https://uwaterloo.ca",
    },
    lab: {
      name: "Cryptography, Security, and Privacy (CrySP)",
      url: "https://crysp.uwaterloo.ca",
    },
    supervisor: {
      name: "Florian Kerschbaum",
      url: "https://cs.uwaterloo.ca/~fkerschb/",
    },
    alumniOf: [
      { name: "University of Waterloo", url: "https://uwaterloo.ca" },
      {
        name: "The American University in Cairo",
        url: "https://www.aucegypt.edu",
      },
    ],
  },
  social: {
    github: "https://github.com/D-Diaa",
    linkedin: "https://www.linkedin.com/in/abdulrahmandiaa/",
    scholar: "https://scholar.google.com/citations?user=xFX1k1AAAAAJ",
    orcid: "https://orcid.org/0009-0000-0377-3680",
    dblp: "https://dblp.org/pid/325/5429.html",
  },
  topics: {
    "Privacy-Preserving Machine Learning": {
      color: "var(--color-topic-privacy)",
    },
    "AI-content Watermarking": {
      color: "var(--color-topic-watermark)",
    },
  },
} as const;
