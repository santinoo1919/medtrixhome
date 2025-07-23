#!/bin/bash

echo "Building combined CSS file..."

# Create the combined CSS file with all modular files in order
cat styles/globals.css \
    styles/layout.css \
    styles/buttons.css \
    styles/map-cards.css \
    styles/forms.css \
    styles/header.css \
    styles/notifications.css \
    styles/category-filtering.css \
    styles/modal.css \
    styles/info-sidebar.css > styles/combined.css

echo "✅ Combined CSS file created: styles/combined.css"
echo "📁 Total size: $(wc -c < styles/combined.css) bytes" 