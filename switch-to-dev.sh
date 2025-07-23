#!/bin/bash

echo "🔄 Switching to Development Mode (Modular CSS)..."

# Update index.html to use modular CSS files
sed -i '' 's|<!-- Development: Modular CSS files -->|<!-- Development: Modular CSS files -->|' index.html
sed -i '' 's|<!-- <link rel="stylesheet" href="styles/globals.css" /> -->|<link rel="stylesheet" href="styles/globals.css" />|' index.html
sed -i '' 's|<!-- <link rel="stylesheet" href="styles/layout.css" /> -->|<link rel="stylesheet" href="styles/layout.css" />|' index.html
sed -i '' 's|<!-- <link rel="stylesheet" href="styles/components.css" /> -->|<link rel="stylesheet" href="styles/components.css" />|' index.html
sed -i '' 's|<!-- <link rel="stylesheet" href="styles/info-sidebar.css" /> -->|<link rel="stylesheet" href="styles/info-sidebar.css" />|' index.html
sed -i '' 's|<!-- Production: Single combined CSS file -->|<!-- Production: Single combined CSS file -->|' index.html
sed -i '' 's|<link rel="stylesheet" href="styles/combined.css" />|<!-- <link rel="stylesheet" href="styles/combined.css" /> -->|' index.html

echo "✅ Switched to Development Mode"
echo "📁 Now using modular CSS files for faster development" 