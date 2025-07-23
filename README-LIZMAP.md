# Medtrix Atlas - Implementation Guide for Lizmap Team

## 🎯 **Overview**

This project uses a modular CSS approach for safe development and easy maintenance.

## 📁 **File Structure**

### **Development Files (Modular):**

```
styles/
├── globals.css      (basic styles, variables)
├── layout.css       (layout, grid, responsive)
├── components.css   (buttons, cards, forms)
└── info-sidebar.css (sidebar specific styles)
```

### **Production Files (Combined):**

```
styles/
└── combined.css     (all styles merged)
```

## 🚀 **Implementation Steps**

### **1. Development Phase:**

- Use `index.html` with multiple CSS files (lines 8-11)
- Edit individual CSS files for faster development
- Test changes immediately

### **2. Production Phase:**

- Run the build script: `./build-css.sh`
- Comment out modular CSS lines (8-11) in `index.html`
- Uncomment combined CSS line (13) in `index.html`
- Deploy the combined file for better performance

## 🛠️ **Build Process**

### **To combine CSS files:**

```bash
./build-css.sh
```

### **What this does:**

- Combines all CSS files into `styles/combined.css`
- Shows file size for optimization
- Creates production-ready single file

## 📋 **Handover Checklist**

### **For Lizmap Team:**

- [ ] `build-css.sh` - Build script
- [ ] `index.html` - Single HTML file (works for both dev and prod)
- [ ] `styles/combined.css` - Combined CSS file
- [ ] All individual CSS files in `styles/` folder

### **Deployment Options:**

#### **Option A: Development (Modular)**

```html
<link rel="stylesheet" href="styles/globals.css" />
<link rel="stylesheet" href="styles/layout.css" />
<link rel="stylesheet" href="styles/components.css" />
<link rel="stylesheet" href="styles/info-sidebar.css" />
```

#### **Option B: Production (Combined)**

```html
<link rel="stylesheet" href="styles/combined.css" />
```

## 🔧 **Maintenance**

### **Adding New Styles:**

1. Create new CSS file (e.g., `new-component.css`)
2. Add to `index.html` head section
3. Update `build-css.sh` to include new file
4. Run build script to update combined file

### **Updating Styles:**

1. Edit individual CSS files
2. Test in development mode
3. Run build script for production
4. Deploy updated combined file

## 📊 **Benefits**

### **Development:**

- ✅ Faster editing (smaller files)
- ✅ Safer changes (isolated components)
- ✅ Better organization
- ✅ Easier debugging

### **Production:**

- ✅ Single HTTP request
- ✅ Better performance
- ✅ Smaller total file size
- ✅ Easier deployment

## 🎯 **Quick Start**

1. **For Development:**

   ```bash
   # Edit individual files, use index.html
   ```

2. **For Production:**
   ```bash
   ./build-css.sh
   # Use index-production.html
   ```

## 📞 **Support**

- All CSS files are modular and self-contained
- Build script is simple and reliable
- No JavaScript required for build process
- Easy to maintain and extend
