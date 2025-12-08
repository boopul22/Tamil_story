import { c as createComponent, a as renderTemplate, f as renderSlot, j as renderHead, r as renderComponent, u as unescapeHTML, m as maybeRenderHead, d as createAstro, b as addAttribute, e as renderScript } from './astro/server_CH8WiV83.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeManager = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- \n  ThemeManager: A centralized script to handle light/dark mode.\n  Placed in <head> to prevent FOUC.\n--><script>\n    (function () {\n        // 1. Core Logic: specific preference > system preference\n        function getTheme() {\n            if (\n                typeof localStorage !== "undefined" &&\n                localStorage.getItem("theme")\n            ) {\n                return localStorage.getItem("theme");\n            }\n            // Default to light mode as requested\n            return "light";\n        }\n\n        // 2. Apply Theme\n        function setTheme(theme) {\n            if (theme === "dark") {\n                document.documentElement.classList.add("dark");\n            } else {\n                document.documentElement.classList.remove("dark");\n            }\n            window.localStorage.setItem("theme", theme);\n\n            // Dispatch a custom event so other components (like toggles) can update their UI\n            // regardless of where they are in the DOM or when they loaded.\n            window.dispatchEvent(\n                new CustomEvent("theme-change", { detail: { theme } }),\n            );\n        }\n\n        // 3. Initialize\n        setTheme(getTheme());\n\n        // 4. Expose Global API\n        window.toggleTheme = function () {\n            const current = getTheme();\n            const next = current === "dark" ? "light" : "dark";\n            setTheme(next);\n        };\n\n        // 5. Listen for System Changes (if no manual override)\n        window\n            .matchMedia("(prefers-color-scheme: dark)")\n            .addEventListener("change", (e) => {\n                if (!localStorage.getItem("theme")) {\n                    setTheme(e.matches ? "dark" : "light");\n                }\n            });\n    })();\n<\/script>'])));
}, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/components/ThemeManager.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TamilKathai",
    url: "https://tamilkathai.in",
    logo: "https://tamilkathai.in/logo.svg",
    description: "A collection of wonderful Tamil stories for children"
  });
  return renderTemplate(_a || (_a = __template([`<html lang="ta"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Siruvar Neethi Kathaigal - Tamil Kids Stories</title><!-- Favicon and Branding --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#11224E"><meta name="msapplication-TileColor" content="#11224E"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="TamilKathai"><!-- Font Preload for faster loading --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Noto+Sans+Tamil:wght@300;400;500;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">`, '<noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Noto+Sans+Tamil:wght@300;400;500;600;700&display=swap" rel="stylesheet"></noscript><script type="application/ld+json">', "<\/script>", "", "", '</head> <body class="bg-[var(--color-bg)] text-[var(--color-text-main)] antialiased selection:bg-[#F87B1B] selection:text-white transition-colors duration-300 overflow-x-hidden"> ', " </body></html>"])), maybeRenderHead(), unescapeHTML(schema), renderSlot($$result, $$slots["head"]), renderComponent($$result, "ThemeManager", $$ThemeManager, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://tamilkathai.in");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    name,
    size = 24,
    class: className = "",
    strokeWidth = 1.5
  } = Astro2.props;
  const icons = {
    "book-open": `<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`,
    headphones: `<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>`,
    calendar: `<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>`,
    "arrow-right": `<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>`,
    "arrow-left": `<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>`,
    "arrow-up": `<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>`,
    search: `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`,
    menu: `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`,
    x: `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`,
    mail: `<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`,
    heart: `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>`,
    clock: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
    "chevron-right": `<path d="m9 18 6-6-6-6"/>`,
    "chevron-left": `<path d="m15 18-6-6 6-6"/>`,
    plus: `<path d="M5 12h14"/><path d="M12 5v14"/>`,
    minus: `<path d="M5 12h14"/>`,
    sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`,
    moon: `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`,
    "message-circle": `<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>`,
    twitter: `<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>`,
    facebook: `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>`,
    instagram: `<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>`,
    link: `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`,
    lightbulb: `<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>`,
    check: `<path d="M20 6 9 17l-5-5"/>`,
    eye: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`
  };
  const svgContent = icons[name] || icons["book-open"];
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")} aria-hidden="true">${unescapeHTML(svgContent)}</svg>`;
}, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`<!-- Footer matching Tamil Story design with dark mode support -->${maybeRenderHead()}<footer class="bg-[var(--color-bg)] border-t border-[var(--color-border)] pt-16 pb-8"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"> <div class="space-y-4"> <div class="flex items-center gap-2"> <img src="/logo.svg" alt="Tamil Story Logo" class="w-6 h-6 hover:scale-110 transition-transform duration-300"> <span class="font-semibold text-base tracking-tight text-[var(--color-text-main)]">கதைகள்</span> </div> <p class="text-sm text-[var(--color-text-muted)] leading-relaxed">
குழந்தைகளுக்கான நற்பண்புகள் மற்றும் நீதி போதனைகளை கதைகள்
					மூலம் கொண்டு சேர்ப்பதே எங்கள் நோக்கம்.
</p> </div> <div> <h4 class="font-semibold text-[var(--color-text-main)] mb-4 text-sm">
பிரிவுகள்
</h4> <ul class="space-y-3 text-sm text-[var(--color-text-muted)]"> <li> <a href="/blog" class="hover:text-[var(--color-accent)] transition-colors">நீதி கதைகள்</a> </li> <li> <a href="/blog" class="hover:text-[var(--color-accent)] transition-colors">விலங்கு கதைகள்</a> </li> <li> <a href="/blog" class="hover:text-[var(--color-accent)] transition-colors">தெனாலிராமன்</a> </li> <li> <a href="/blog" class="hover:text-[var(--color-accent)] transition-colors">புராண கதைகள்</a> </li> </ul> </div> <div> <h4 class="font-semibold text-[var(--color-text-main)] mb-4 text-sm">
நிறுவனம்
</h4> <ul class="space-y-3 text-sm text-[var(--color-text-muted)]"> <li> <a href="/about" class="hover:text-[var(--color-accent)] transition-colors">எங்களை பற்றி</a> </li> <li> <a href="/contact" class="hover:text-[var(--color-accent)] transition-colors">Contact Us</a> </li> <li> <a href="/terms-conditions" class="hover:text-[var(--color-accent)] transition-colors">Terms & Conditions</a> </li> <li> <a href="/privacy-policy" class="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a> </li> <li> <a href="/disclaimer" class="hover:text-[var(--color-accent)] transition-colors">Disclaimer</a> </li> </ul> </div> <div> <h4 class="font-semibold text-[var(--color-text-main)] mb-4 text-sm">
சமூக ஊடகம்
</h4> <div class="flex gap-4"> <a href="#" class="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-accent)] hover:text-white transition-all" aria-label="Facebook"> ${renderComponent($$result, "Icon", $$Icon, { "name": "facebook", "size": 16 })} </a> <a href="#" class="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-accent)] hover:text-white transition-all" aria-label="Twitter"> ${renderComponent($$result, "Icon", $$Icon, { "name": "twitter", "size": 16 })} </a> <a href="#" class="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-accent)] hover:text-white transition-all" aria-label="Instagram"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "size": 16 })} </a> </div> </div> </div> <div class="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4"> <p class="text-xs text-[var(--color-text-muted)]">
© ${today.getFullYear()} Siruvar Kathaigal. All rights reserved.
</p> <div class="flex items-center gap-2 text-xs text-[var(--color-text-muted)]"> <span>Made with</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "heart", "size": 12, "class": "text-[var(--color-accent)]" })} <span>for kids</span> </div> </div> </div> </footer>`;
}, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Navigation matching Tamil Story design with dark mode support -->${maybeRenderHead()}<nav class="fixed top-0 w-full z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <!-- Logo --> <a href="/" class="flex-shrink-0 flex items-center gap-2 cursor-pointer group"> <img src="/logo.svg" alt="Tamil Story Logo" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300"> <span class="font-semibold text-lg tracking-tight text-[var(--color-text-main)]">கதைகள்</span> </a> <!-- Desktop Menu --> <div class="hidden md:flex items-center space-x-8"> <a href="/" class="text-sm font-medium text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">முகப்பு</a> <a href="/blog" class="text-sm font-medium text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">கதைகள்</a> <a href="/about" class="text-sm font-medium text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">பற்றி</a> </div> <!-- Actions --> <div class="flex items-center gap-4"> <button class="p-2 text-[var(--color-text-main)] hover:bg-[var(--color-bg)] rounded-full transition-all" aria-label="Search"> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "size": 20, "strokeWidth": 1.5 })} </button> <a href="#subscribe" class="hidden sm:flex px-4 py-2 bg-[var(--color-primary)] text-[var(--color-bg)] text-xs font-medium rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300 items-center gap-2"> <span>பதிவு செய்</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "size": 14, "strokeWidth": 1.5 })} </a> <!-- Mobile Menu Button --> <button class="md:hidden p-2 text-[var(--color-text-main)]" id="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false"> ${renderComponent($$result, "Icon", $$Icon, { "name": "menu", "size": 24, "strokeWidth": 1.5, "class": "menu-icon" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "x", "size": 24, "strokeWidth": 1.5, "class": "close-icon hidden" })} </button> </div> </div> <!-- Mobile Menu --> <div class="mobile-menu hidden md:hidden pb-4 overflow-hidden transition-all duration-300 ease-in-out max-h-0" id="mobile-menu"> <div class="flex flex-col space-y-2 pt-2"> <a href="/" class="px-4 py-2 text-sm font-medium text-[var(--color-text-main)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg)] rounded-lg transition-colors">முகப்பு</a> <a href="/blog" class="px-4 py-2 text-sm font-medium text-[var(--color-text-main)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg)] rounded-lg transition-colors">கதைகள்</a> <a href="/about" class="px-4 py-2 text-sm font-medium text-[var(--color-text-main)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg)] rounded-lg transition-colors">பற்றி</a> </div> </div> </div> </nav> ${renderScript($$result, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/components/Header.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Icon as b, $$Footer as c };
