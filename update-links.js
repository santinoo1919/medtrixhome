const fs = require("fs");

// Read the HTML file
let html = fs.readFileSync("index.html", "utf8");

// Project links mapping
const projectLinks = {
  impact: "https://medtrix.fr/portfolio_page/impact/",
  recor: "https://medtrix.fr/portfolio_page/recor/",
  tempo: "https://medtrix.fr/portfolio_page/tempo-2/",
  piscis: "https://medtrix.fr/portfolio_page/piscis/",
  surfstat: "https://medtrix.fr/portfolio_page/surfstat/",
  donia: "https://medtrix.fr/portfolio_page/441/",
  respiire: "https://medtrix.fr/portfolio_page/respire/",
  carlit: "https://medtrix.fr/portfolio_page/carlit/",
  model: "https://medtrix.fr/portfolio_page/model/",
  rompom: "https://medtrix.fr/portfolio_page/rompom/",
  sirenha: "https://medtrix.fr/portfolio_page/sirenha/",
  sediments: "https://medtrix.fr/portfolio_page/ose-med/",
  obslag: "https://medtrix.fr/portfolio_page/obslag/",
  "ose-med": "https://medtrix.fr/portfolio_page/ose-med/",
  rescor: "N/A",
  lagmed: "https://medtrix.fr/portfolio_page/lagmed/",
  "restau-med": "https://medtrix.fr/portfolio_page/restau-med/",
  atlas: "https://medtrix.fr/portfolio_page/6282/",
  expeditions: "https://medtrix.fr/portfolio_page/expeditions-scientifiques/",
  calme: "https://medtrix.fr/portfolio_page/calme/",
  calor: "https://medtrix.fr/portfolio_page/calor/",
  cetamed: "https://medtrix.fr/portfolio_page/cetamed/",
  "chimie-med": "https://medtrix.fr/portfolio_page/chimie-med/",
  "filam-med": "https://medtrix.fr/portfolio_page/filamed/",
  foramed: "https://medtrix.fr/portfolio_page/foramed/",
  medhab: "https://medtrix.fr/portfolio_page/medhab/",
  littomed: "https://medtrix.fr/portfolio_page/littomed/",
  "stare-capmed": "https://medtrix.fr/portfolio_page/stare-capmed/",
  "sciences-participatives":
    "https://medtrix.fr/portfolio_page/sciences-participatives/",
  mouillage: "https://medtrix.fr/portfolio_page/mouillage/",
  typologie: "https://medtrix.fr/portfolio_page/togelm/",
  pim: "https://medtrix.fr/portfolio_page/pim/",
  chamil: "https://medtrix.fr/portfolio_page/chamila/",
  "donia-expert": "N/A",
  "portail-halieutique": "https://medtrix.fr/portfolio_page/pamm/",
  magma: "https://medtrix.fr/portfolio_page/magma/",
  medobs: "https://medtrix.fr/portfolio_page/medobs/",
  "medobs-sub": "N/A",
  "mer-veille": "https://medtrix.fr/portfolio_page/mer-veille/",
  nador: "https://medtrix.fr/portfolio_page/nador/",
  oblades: "https://medtrix.fr/portfolio_page/oblades/",
  "stere-2024": "N/A",
  sulubaa: "N/A",
  eref: "N/A",
};

// Update each project link
Object.keys(projectLinks).forEach((projectId) => {
  const link = projectLinks[projectId];
  if (link !== "N/A") {
    const pattern = new RegExp(
      `for="${projectId}-sidebar-toggle" class="tooltip-icon"`,
      "g"
    );
    if (pattern.test(html)) {
      // Find the corresponding link and update it
      const linkPattern = new RegExp(
        `(<a href="#" class="map-project-link">Voir projet ↗</a>\\s*<label for="${projectId}-sidebar-toggle" class="tooltip-icon">ℹ️</label>)`,
        "g"
      );
      html = html.replace(
        linkPattern,
        `<a href="${link}" class="map-project-link">Voir projet ↗</a>\n                    <label for="${projectId}-sidebar-toggle" class="tooltip-icon">ℹ️</label>`
      );
    }
  }
});

// Write the updated HTML back
fs.writeFileSync("index.html", html);

console.log("All project links updated!");
