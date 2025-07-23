// No JavaScript functionality - everything works with CSS and HTML only
document.addEventListener("DOMContentLoaded", function () {
  console.log("Medtrix Atlas loaded successfully!");

  // Add click handlers for tooltips
  document.addEventListener("click", function (e) {
    // Check if clicked element is a tooltip (map-meta::after)
    if (e.target.closest(".map-meta")) {
      const mapCard = e.target.closest(".map-card");
      if (mapCard) {
        // Find the sidebar toggle ID from the map card
        const viewBtn = mapCard.querySelector(".view-btn");
        if (viewBtn) {
          const sidebarToggleId = viewBtn.getAttribute("for");
          if (sidebarToggleId) {
            // Trigger the sidebar toggle
            const sidebarToggle = document.getElementById(sidebarToggleId);
            if (sidebarToggle) {
              sidebarToggle.checked = true;
            }
          }
        }
      }
    }
  });

  // Remove click functionality from View Map buttons (make them non-clickable)
  const viewButtons = document.querySelectorAll(".view-btn");
  viewButtons.forEach((btn) => {
    btn.style.pointerEvents = "none";
    btn.style.cursor = "default";
  });
});
