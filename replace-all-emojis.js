const fs = require("fs");

// Read the HTML file
let html = fs.readFileSync("index.html", "utf8");

// Replace all map-image divs that contain emojis with background image
const regex = /(<div class="map-image">)[^<]*(<\/div>)/g;
const replacement = `$1 style="background-image: url('assets/images/maps/restaumed.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; width: 100%; height: 100%;"$2`;

html = html.replace(regex, replacement);

// Write the updated HTML back
fs.writeFileSync("index.html", html);

console.log("✅ Replaced all emoji divs with background images");
