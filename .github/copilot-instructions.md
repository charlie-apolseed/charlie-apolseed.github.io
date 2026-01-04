# Copilot Instructions for charlie-apolseed.github.io

## Project Overview
Static personal portfolio website based on the **iPortfolio Bootstrap 5.3.3 template** with significant customizations. The site showcases Charlie Apolinsky's professional background, projects, and personal interests. No backend framework or build process—pure HTML/CSS/JS deployed via GitHub Pages.

## Architecture & Key Concepts

### Page Structure
- **`index.html`**: Main landing page with sections: hero, about, skills, resume, portfolio, and activities
- **`*-details.html`**: Individual project detail pages (ApolEats, Coffee Maker, Drag Experiment, SailSwarm, Strava Visualizer)
- **`starter-page.html`**: Unused template file—ignore for development

### Template Customization
The iPortfolio template has been **modified extensively**. When editing:
- Preserve template comments (e.g., `<!-- Section Title -->`) for structure clarity
- Maintain Bootstrap 5.3.3 class naming: `d-flex`, `col-lg-6`, `light-background`, `dark-background`
- CSS custom properties (CSS variables) control the color scheme in `assets/css/main.css` (lines 13–41)
- Never break the responsive grid system—test changes at mobile (`d-none d-md-block`) and desktop breakpoints

### Asset Organization
```
assets/
├── css/main.css           # All styling, 1328 lines. CSS vars at top, then global styles
├── js/
│   ├── main.js            # Template interactions: header toggle, scroll effects, AOS init (232 lines)
│   └── email.js           # Contact form validation & ElasticEmail SMTP integration
├── img/
│   ├── my-profile-img.jpg # Profile photo (used in header and about section)
│   ├── hero-bg.jpg        # Hero section background
│   ├── portfolio/         # Project thumbnails (app-1.jpg, app-2.png, research-1.jpg, etc.)
│   └── activities/        # Sports, volunteering, travel, cooking hobby images
└── vendor/                # External libraries (Bootstrap, AOS, GLightbox, etc.)
```

## JavaScript Patterns & Dependencies

### Core Libraries (in HTML head)
- **Bootstrap 5.3.3**: Grid, components, utilities
- **AOS** (Animate On Scroll): `data-aos="fade-up"` triggers CSS animations on scroll
- **Typed.js**: Types rotating text in hero (`.typed` class with `data-typed-items` attribute)
- **GLightbox**: Image zoom gallery for portfolio
- **Isotope**: Portfolio masonry layout with filtering (`.filter-app`, `.filter-research`)
- **Swiper**: Slider in project detail pages
- **SweetAlert2**: Success notifications (e.g., contact form submission)

### Key JavaScript Behaviors
1. **Header toggle** (`main.js` line 15–24): Mobile nav appears/disappears via `.header-toggle` button
2. **Mobile nav close on link click** (line 27–34): Automatically closes menu when user navigates to anchor
3. **Scroll-to-top button** (line 61–72): Shows/hides when scrollY > 100px
4. **Contact form validation** (`email.js`): Checks all fields before sending via ElasticEmail SMTP

### Important: Email Configuration
`email.js` (lines 7–15) uses **hardcoded ElasticEmail credentials**. Before committing changes:
- Never expose SMTP password in version control (currently visible at line 8)
- Consider moving credentials to `.env` file or server-side handler (`forms/contact.php`)

## Styling Conventions

### CSS Variables (Primary Customization Point)
Located in `assets/css/main.css` lines 13–50. Changing these updates the entire color scheme:
```css
--default-color: #272829;      /* Main text */
--heading-color: #050d18;      /* Headings */
--accent-color: #149ddd;       /* Buttons, links, highlights */
--background-color: #ffffff;   /* Page background */
```

**Section Overrides**: Apply `.light-background` (light gray) or `.dark-background` (dark blue) classes to sections to swap color presets.

### Responsive Design
- **Desktop**: Full sidebar header (left), main content (right)
- **Mobile** (`d-xl-none`): Header collapses to hamburger menu
- **Breakpoints**: Bootstrap defaults (`col-lg-6`, `d-md-block`, `d-xl-none`)

## Content Update Patterns

### Adding a New Project
1. Create `projectName-details.html` (copy structure from `apolEats-details.html`)
2. Add thumbnail to `assets/img/portfolio/` (follow naming: `app-X.png` or `research-X.jpg`)
3. Add portfolio grid item to `index.html` (search for `portfolio-item isotope-item`):
   ```html
   <div class="col-lg-6 col-md-6 portfolio-item isotope-item filter-app">
     <div class="portfolio-content h-100">
       <img src="assets/img/portfolio/app-4.png" class="img-fluid" alt="">
       <div class="portfolio-info">
         <h4>Project Name</h4>
         <p>Short description</p>
         <a href="assets/img/portfolio/app-4.jpg" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
         <a href="projectName-details.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
       </div>
     </div>
   </div>
   ```
4. Use filter classes: `filter-app` or `filter-research` to control Isotope sorting

### Updating Resume or About Content
- **Resume**: Lines 430–485 in `index.html` — two-column layout (`col-lg-6` left for education, right for experience)
- **About section**: Lines 105–158 — update `<a>` href tags for external links
- **Skills**: Lines 162–280 — progress bars with `aria-valuenow` attribute (0–100 scale)

### Adding Activities/Hobbies Images
Located in `index.html` lines 550–620 (Activities section). Pattern:
```html
<img src="/assets/img/activities/imageName.jpeg" alt="Description">
```
Note the leading `/` in src paths for activities images (inconsistent with rest of site—preserve this).

## Form Handling

### Contact Form Flow
1. HTML form in `index.html` → triggers `submitRecipe()` or email validation in `email.js`
2. `email.js` validates fields, prevents submission if any `.error` class is added
3. On success, calls `Email.send()` (SmtpJS v3 library) or shows alert via SweetAlert2
4. Backend alternative exists in `forms/contact.php` but is **not currently wired to frontend**

## Deployment & No-Build Workflow
- **Deployment**: GitHub Pages auto-deploys from `main` branch
- **No build step**: Just commit changes to `.html`, `.css`, `.js` files
- **Testing**: Open `index.html` in browser locally or use Live Server extension

## Common Tasks

| Task | File(s) | Pattern |
|------|---------|---------|
| Change brand color | `assets/css/main.css` | Update `--accent-color` |
| Add skill/update resume | `index.html` | Edit resume section, skill progress bars |
| Add activity photo | `assets/img/activities/` + `index.html` | Add `<img>` tag with `/assets/img/activities/` path |
| Fix responsive layout | `assets/css/main.css` | Check Bootstrap breakpoint classes |
| Update hero typing text | `index.html` line 50 | Modify `data-typed-items` attribute |
| Debug scroll animations | `assets/js/main.js` | Check `AOS.init()` config (line 85–89) |

## Notes for AI Agents
- Always preserve HTML template comments (e.g., `<!-- End Portfolio Item -->`)—they mark visual sections
- When modifying CSS, test on mobile viewport (max-width: 576px) to ensure no breakage
- The site uses **absolute positioning and CSS variables heavily**—changes to one can cascade unexpectedly
- Email functionality is partially integrated; frontend uses ElasticEmail, backend stub exists in PHP
- No database, API calls, or backend framework—all data is static in HTML
