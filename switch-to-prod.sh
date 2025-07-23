#!/bin/bash

echo "🚀 Switching to Production Mode (Combined CSS)..."

# First, build the combined CSS file
./build-css.sh

# Update index.html to use combined CSS file
sed -i '' 's|<!-- Development: Modular CSS files -->|<!-- Development: Modular CSS files -->|' index.html
sed -i '' 's|<link rel="stylesheet" href="styles/globals.css" />|<!-- <link rel="stylesheet" href="styles/globals.css" /> -->|' index.html
sed -i '' 's|<link rel="stylesheet" href="styles/layout.css" />|<!-- <link rel="stylesheet" href="styles/layout.css" /> -->|' index.html
sed -i '' 's|<link rel="stylesheet" href="styles/components.css" />|<!-- <link rel="stylesheet" href="styles/components.css" /> -->|' index.html
sed -i '' 's|<link rel="stylesheet" href="styles/info-sidebar.css" />|<!-- <link rel="stylesheet" href="styles/info-sidebar.css" /> -->|' index.html
sed -i '' 's|<!-- Production: Single combined CSS file -->|<!-- Production: Single combined CSS file -->|' index.html
sed -i '' 's|<!-- <link rel="stylesheet" href="styles/combined.css" /> -->|<link rel="stylesheet" href="styles/combined.css" />|' index.html

echo "✅ Switched to Production Mode"
echo "📁 Now using combined CSS file for better performance" 