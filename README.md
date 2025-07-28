# Medtrix Atlas - Implementation Guide for Hosting Team

## 🎯 **Overview**

This is the Medtrix Atlas web application - a comprehensive mapping interface for Mediterranean marine data visualization. The project is ready for deployment and uses a modular CSS approach for easy maintenance.

## 📁 **Current File Structure**

### **Core Files:**

```
medtrix-home/
├── index.html                    (main application file)
├── styles/                       (CSS files)
│   ├── globals.css              (variables, base styles)
│   ├── layout.css               (grid, responsive layout)
│   ├── buttons.css              (button styles)
│   ├── map-cards.css            (map card components)
│   ├── category-filtering.css   (filtering functionality)
│   ├── info-sidebar.css         (sidebar styles)
│   ├── header.css               (header styling)
│   ├── modal.css                (modal components)
│   ├── forms.css                (form elements)
│   ├── notifications.css        (notification styles)
│   └── animations.css           (transitions, keyframes)
├── assets/
│   └── images/
│       └── maps/
│           └── mainbkg.jpg      (main background image)
└── build-css.sh                 (CSS build script)
```

## 🚀 **Deployment Instructions**

### **Option 1: Direct Deployment (Recommended)**

The application is ready for immediate deployment:

1. **Upload all files** to your web server
2. **Ensure `index.html`** is in the root directory
3. **Keep the `styles/` folder** with all CSS files
4. **Include `assets/` folder** for images
5. **No build process required** - works out of the box

### **Option 2: Production Build (Optional)**

If you prefer a single CSS file for performance:

1. **Run the build script:**

   ```bash
   ./build-css.sh
   ```

2. **This creates:** `styles/combined.css`

3. **Update `index.html`** to use combined CSS:
   - Comment out lines 8-11 (individual CSS files)
   - Uncomment line 13 (combined CSS)

## 📋 **Hosting Requirements**

### **Server Requirements:**

- ✅ **Static file hosting** (no server-side processing needed)
- ✅ **HTTPS support** (recommended for security)
- ✅ **Standard web server** (Apache, Nginx, etc.)

### **File Permissions:**

- ✅ **Read access** for all files
- ✅ **Execute access** for `build-css.sh` (if using build process)

### **No Dependencies:**

- ✅ **No Node.js required**
- ✅ **No npm packages**
- ✅ **No build tools needed**
- ✅ **Pure HTML/CSS only**

## 🎯 **Key Features**

### **Current Functionality:**

- **47 Interactive Map Cards** with detailed information
- **Category Filtering** (8 categories)
- **Info Sidebars** for each project
- **Responsive Design** (mobile-friendly)
- **Search Functionality** ("Rechercher une carte...")
- **Direct Links** to Medtrix platform maps
- **Project Portfolio Links** (all open in new tabs)

### **Categories Available:**

- **Réseaux de surveillance**
- **État des eaux côtières et de transition**
- **Restauration écologique**
- **Observatoires et sites ateliers**
- **Gestion côtière**
- **Sciences participatives**
- **Typologie des habitats**
- **Expéditions scientifiques**

## 🔧 **Maintenance Guide**

### **Adding New Map Cards:**

1. **Add to `index.html`:**

   - Copy existing map card structure
   - Update title, description, category
   - Add sidebar toggle and content

2. **Update CSS if needed:**
   - Add new category styles in `category-filtering.css`
   - Update sidebar styles in `info-sidebar.css`

### **Updating Project Links:**

1. **Edit `index.html`** directly
2. **Update `href` attributes** in map cards
3. **All links open in new tabs** (`target="_blank"`)

### **CSS Modifications:**

1. **Edit individual CSS files** in `styles/` folder
2. **Test changes** immediately
3. **Optional:** Run `./build-css.sh` for production

## 📊 **Performance Notes**

### **Current Setup:**

- **Multiple CSS files** for development flexibility
- **Fast loading** on modern browsers
- **Optimized images** in assets folder
- **No JavaScript required** - pure CSS functionality

### **Optimization Options:**

- **Use combined CSS** for production (see Option 2 above)
- **Enable gzip compression** on server
- **Set proper cache headers** for static files

## 🎨 **Design System**

### **CSS Variables (globals.css):**

- **Color scheme:** Primary blues, secondary grays
- **Spacing:** Consistent spacing scale
- **Typography:** Modern, readable fonts
- **Transitions:** Smooth animations throughout

### **Responsive Breakpoints:**

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 📞 **Support Information**

### **For Technical Issues:**

- **Check browser console** for any errors
- **Verify file paths** in HTML
- **Test on different browsers** (Chrome, Firefox, Safari)

### **For Content Updates:**

- **Map card data:** Edit `index.html` directly
- **Styling changes:** Modify CSS files in `styles/`
- **New features:** Add to existing structure

## 🚀 **Quick Deployment Checklist**

- [ ] Upload `index.html` to web root
- [ ] Upload `styles/` folder with all CSS files
- [ ] Upload `assets/` folder with images

- [ ] Test all map cards and sidebars
- [ ] Verify responsive design on mobile
- [ ] Check all external links work
- [ ] Confirm HTTPS compatibility

## ✅ **Ready for Production**

The Medtrix Atlas is **fully functional** and ready for immediate deployment. No additional setup or configuration required.

**Last Updated:** Current version includes all 47 map cards with complete sidebar information, responsive design, optimized user experience, and **zero JavaScript dependencies**.
