// Medtrix Maps Interface Script
// This file handles additional functionality for the Medtrix maps interface

// Category filtering functionality
document.addEventListener("DOMContentLoaded", function () {
  // Handle category selection
  const categoryInputs = document.querySelectorAll('input[name="category"]');
  const mapCards = document.querySelectorAll(".map-card");

  categoryInputs.forEach((input) => {
    input.addEventListener("change", function () {
      const selectedCategory = this.id;

      // Show/hide maps based on category
      mapCards.forEach((card) => {
        if (
          selectedCategory === "all" ||
          card.getAttribute("data-category") === selectedCategory
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Handle subcategory clicks
  const subcategoryItems = document.querySelectorAll(".subcategory-item");
  subcategoryItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.getAttribute("data-category");
      const subcategory = this.getAttribute("data-subcategory");

      // Filter maps based on subcategory
      mapCards.forEach((card) => {
        if (
          card.getAttribute("data-category") === category &&
          card.getAttribute("data-subcategory") === subcategory
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Enhanced sidebar functionality
function openSidebar(title, description) {
  const sidebar = document.getElementById("tooltipSidebar");
  const titleElement = document.getElementById("sidebarTitle");
  const descriptionElement = document.getElementById("sidebarDescription");

  // Escape HTML to prevent XSS
  titleElement.textContent = title;
  descriptionElement.textContent = description;

  // Extract "Outils disponibles" from the description if it exists
  const outilsIndex = description.toLowerCase().indexOf("outils disponibles");
  let outilsSection = "";

  if (outilsIndex !== -1) {
    // Extract the "Outils disponibles" section
    const outilsText = description.substring(outilsIndex);
    // Find the end of the section (look for common ending patterns)
    const endIndex = outilsText.search(/\.\s*(?=[A-Z]|$)/);
    if (endIndex !== -1) {
      outilsSection = outilsText.substring(0, endIndex + 1);
    } else {
      outilsSection = outilsText;
    }
  }

  // Update the sidebar content
  const sidebarContent = sidebar.querySelector(".sidebar-content");

  // Clear existing meta sections
  const existingMeta = sidebarContent.querySelectorAll(".meta");
  existingMeta.forEach((meta) => meta.remove());

  // Add "Outils disponibles" section if it exists
  if (outilsSection) {
    const metaDiv = document.createElement("div");
    metaDiv.className = "meta";
    metaDiv.innerHTML = `
      <h5>Outils disponibles</h5>
      <p>${outilsSection}</p>
    `;
    sidebarContent.appendChild(metaDiv);
  }

  sidebar.classList.add("active");
}

function closeSidebar() {
  document.getElementById("tooltipSidebar").classList.remove("active");
}

// Search functionality
function searchMaps(query) {
  const mapCards = document.querySelectorAll(".map-card");
  const searchTerm = query.toLowerCase();

  mapCards.forEach((card) => {
    const title = card.querySelector("h4").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Build Own Map functionality
function buildOwnMap() {
  // For now, show an alert with information about building custom maps
  alert(
    "🚀 Build Your Own Map Feature Coming Soon!\n\nThis feature will allow you to:\n• Upload your own data\n• Create custom visualizations\n• Share your maps with the community\n\nStay tuned for updates!"
  );

  // Future implementation could include:
  // - Modal with map builder interface
  // - Data upload functionality
  // - Custom visualization options
  // - Map sharing capabilities
}

// Export functions for global access
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;
window.searchMaps = searchMaps;
window.buildOwnMap = buildOwnMap;
