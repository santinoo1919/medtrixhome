const fs = require("fs");

// Read the HTML file
let html = fs.readFileSync("index.html", "utf8");

// Contact information mapping from project-links-contacts.txt
const contactUpdates = {
  impact: "Thomas Bockel (thomas.bockel@andromede-ocean.com) / Florian Holon",
  donia: "Agathe Blandin/ Gwenaëlle Delaruelle / Jo-Ann Schies",
  chamil:
    "Anaïs Giraud (anais.giraud@eaurmc.fr) / Vincent Ouisse (vincent.ouisse@ifremer.fr)",
  "donia-expert": "Agathe Blandin/ Gwenaëlle Delaruelle",
  recor: "Gwenaëlle Delaruelle / Julie Deter",
  tempo: "Gwenaëlle Delaruelle",
  piscis: "Thomas Bockel",
  surfstat: "Gwenaëlle Delaruelle/ Agathe Blandin",
  respiire:
    "Amélie FONTCUBERTA (amelie.fontcuberta@ecocean.fr) / Anais GUDEFIN (anais.gudefin@ecocean.fr)",
  model: "Guilhem Marre",
  rompom: "Eva Tankovic (e.tankovic@initiative-pim.org)",
  sirenha: "Claire NOEL, noel@semantic-ts.fr",
  sediments: "Cathy-Anna VALENTINI (CathyAnna.VALENTINIPOIRIER@eaurmc.fr)",
  obslag:
    "Anaïs Giraud (anais.giraud@eaurmc.fr) / Dominique Munaron (dominique.munaron@ifremer.fr) / Valérie Derolez (Valerie.Derolez@ifremer.fr)",
  "ose-med": "Cathy-Anna VALENTINI (CathyAnna.VALENTINIPOIRIER@eaurmc.fr)",
  "stare-capmed": "Lovina Fullgrabe (l.fullgrabe@stareso.corsica)",
  magma: "Laurent BEGUERY (lbeguery@alseamar-alcen.com)",
  medobs:
    "Cédric Soriano – ops@airattack.f Et Pierre Boissery – pierre.boissery@eaurmc.fr",
  "mer-veille": "Gwenaëlle Delaruelle",
  nador: "Hocein Bazairi (hoceinbazairi@yahoo.fr)",
  oblades: "Thierry Aune, tizaplouf@gmail.com",
  carlit:
    "Aurélie Blanfuné (aurelie.blanfune-thibaut@univ-amu.fr) et Thierry Thibaut (thierry.thibaut@univ-amu.fr)",
  lagmed:
    "Anaïs Giraud (anais.giraud@eaurmc.fr) / Nicolas CIMITERRA (Nicolas.Cimiterra@ifremer.fr) / Dominique MUNARON (dominique.munaron@ifremer.fr) / Olivier Boutron (boutron@tourduvalat.org)",
  atlas:
    "Gwenaëlle Delaruelle (gwenaelle.delaruelle@andromede-ocean.com) & Pierre Boissery (pierre.boissery@eaurmc.fr)",
  littomed: "Pierre Boissery (Pierre.BOISSERY@eaurmc.fr)",
  mouillage: "Florian Holon / Thomas Bockel",
  typologie:
    "SAGE, contrats de milieu : Pierre.BOISSERY@eaurmc.fr; – Aires marines protégées : frederic.villers@ofb.gouv.fr",
  pim: "Eva Tankovic (e.tankovic@initiative-pim.org)",
  "portail-halieutique":
    "François VIREVIALLE (francois.virevialle@mer.gouv.fr)",
  expeditions: "Gwenaëlle Delaruelle",
  "restau-med":
    "Gwenaëlle Delaruelle gwenaelle.delaruelle@andromede-ocean.com et Pierre Boissery",
  "sciences-participatives": "Gwenaëlle Delaruelle",
  calme: "N/A",
  calor: "Guilhem Marre",
  cetamed:
    "Dr Frank Dhermain (GECEM) / Dr Emmanuel Wafo (emmanuel.wafo@univ-amu.fr)",
  "chimie-med":
    "Pierre Boissery (pierre.boissery@eaurmc.fr) et Marc Bouchoucha (Marc.Bouchoucha@ifremer.fr)",
  "filam-med": "Gwenaëlle Delaruelle",
  foramed:
    "Christine BARRAS (christine.barras@univ-angers.fr) et Frans JORISSEN (frans.jorissen@univ-angers.fr)",
  medhab:
    "Adrien Cheminée adrien.cheminee@septentrion-env.com et Justine Richaume justine.richaume@septentrion-env.com",
  rescor: "N/A",
  eref: "N/A",
  "medobs-sub": "N/A",
  "stere-2024": "N/A",
  sulubaa: "N/A",
};

// Update each contact
Object.keys(contactUpdates).forEach((projectId) => {
  const contact = contactUpdates[projectId];
  if (contact !== "N/A") {
    // Find the contact section for this project and update it
    const pattern = new RegExp(
      `(<h4>Contacts</h4>\\s*<p>)[^<]*(<br />)[^<]*(</p>)`,
      "g"
    );
    // This is a simplified approach - we'll need to be more specific for each project
    console.log(`Would update ${projectId} with: ${contact}`);
  }
});

console.log(
  "Contact update script created. Manual updates may be needed for specific formatting."
);
