import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, e as renderScript, a as renderTemplate, F as Fragment, u as unescapeHTML, f as renderSlot, b as addAttribute } from './astro/server_CH8WiV83.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_d9S2bl-1.mjs';
import { b as $$Icon, $ as $$BaseLayout, c as $$Footer, a as $$Header } from './Header_BLK8Y6cf.mjs';
import { S as SITE_URL, c as SITE_AUTHOR } from './consts_DCvku9s5.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://tamilkathai.in");
const $$ReadingControls = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ReadingControls;
  const { readingTime } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="reading-controls flex items-center justify-between p-4 bg-[var(--color-bg)]/50 backdrop-blur-sm rounded-xl border border-[var(--color-border)] mb-8"> <!-- Reading Time --> ${readingTime && renderTemplate`<div class="flex items-center gap-2 text-sm text-[var(--color-text-muted)] font-medium"> ${renderComponent($$result, "Icon", $$Icon, { "name": "clock", "size": 16 })} <span>வாசிப்பு நேரம்: ${readingTime} நிமிடம்</span> </div>`} <!-- Controls --> <div class="flex items-center gap-4"> <!-- Font Size --> <div class="flex items-center gap-1 bg-[var(--color-primary)]/5 rounded-lg p-1"> <button id="decrease-font" class="p-2 hover:bg-[var(--color-bg)] rounded-md transition-colors text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]" aria-label="Decrease font size"> ${renderComponent($$result, "Icon", $$Icon, { "name": "minus", "size": 14 })} </button> <span class="text-xs font-semibold text-[var(--color-text-muted)] px-1">A</span> <button id="increase-font" class="p-2 hover:bg-[var(--color-bg)] rounded-md transition-colors text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]" aria-label="Increase font size"> ${renderComponent($$result, "Icon", $$Icon, { "name": "plus", "size": 14 })} </button> </div> <!-- Night Mode --> <button id="theme-toggle" class="p-2 rounded-lg bg-[var(--color-primary)]/5 hover:bg-[var(--color-primary)] text-[var(--color-text-main)] hover:text-[var(--color-bg)] transition-all" aria-label="Toggle dark mode"> ${renderComponent($$result, "Icon", $$Icon, { "name": "moon", "size": 18, "class": "dark-icon hidden" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "sun", "size": 18, "class": "light-icon" })} </button> </div> </div> ${renderScript($$result, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/components/ReadingControls.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/components/ReadingControls.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tamilkathai.in");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    title,
    titleEn,
    description,
    pubDate,
    updatedDate,
    heroImage,
    category,
    moral,
    readingTime,
    genre
  } = Astro2.props;
  const currentUrl = Astro2.url.href;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ShortStory",
    headline: `${titleEn ? titleEn + " - " : ""}${title}`,
    name: title,
    description,
    image: heroImage ? new URL(heroImage.src, Astro2.url).toString() : void 0,
    author: {
      "@type": "Person",
      name: SITE_AUTHOR
    },
    publisher: {
      "@type": "Organization",
      name: "TamilKathai",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`
      }
    },
    genre: genre || "Moral Story",
    inLanguage: "ta",
    datePublished: pubDate.toISOString(),
    dateModified: (updatedDate || pubDate).toISOString()
  });
  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Stories",
        item: `${SITE_URL}/blog`
      },
      ...category ? [
        {
          "@type": "ListItem",
          position: 3,
          name: category,
          item: `${SITE_URL}/${category}-kathaigal`
        }
      ] : [],
      {
        "@type": "ListItem",
        position: category ? 4 : 3,
        name: titleEn || title,
        item: currentUrl
      }
    ]
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${titleEn ? titleEn + " - " : ""}${title}`, "description": description, "image": heroImage }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<div id="reading-progress" class="fixed top-16 left-0 w-0 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] z-40 transition-all duration-150"></div> <main class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden"> <!-- Breadcrumb --> <div class="max-w-3xl mx-auto mb-6"> <nav class="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"> <a href="/" class="hover:text-[var(--color-accent)] transition-colors">முகப்பு</a> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-right", "size": 14 })} <a href="/blog" class="hover:text-[var(--color-accent)] transition-colors">கதைகள்</a> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-right", "size": 14 })} <span class="text-[var(--color-text-main)] font-medium truncate max-w-[200px]">${title}</span> </nav> </div> <article> <!-- Hero Section --> <header class="max-w-3xl mx-auto mb-8"> <!-- Category Badge --> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-secondary)]/30 text-[var(--color-text-main)] text-xs font-medium border border-[var(--color-secondary)] mb-4"> <span class="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
சிறுவர் கதை
</div> <!-- Title --> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-text-main)] tracking-tight leading-tight mb-4"> ${title} </h1> ${titleEn && renderTemplate`<h2 class="text-xl md:text-2xl text-[var(--color-text-muted)] font-medium mb-6 mt-0 border-none !pb-0"> ${titleEn} </h2>`} <!-- Description --> <p class="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed mb-6"> ${description} </p> <!-- Meta Row --> <div class="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]"> <span class="inline-flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "clock", "size": 16 })} <span id="reading-time">3 நிமிடங்கள்</span> </span> </div> </header> <!-- Hero Image --> ${heroImage && renderTemplate`<div class="max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-xl border border-[var(--color-border)] group relative"> <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> ${renderComponent($$result2, "Image", $$Image, { "width": 1200, "height": 600, "src": heroImage, "alt": title, "class": "w-full h-auto object-cover", "loading": "eager", "decoding": "sync", "fetchpriority": "high", "format": "avif" })} </div>`} <div class="max-w-3xl mx-auto"> ${renderComponent($$result2, "ReadingControls", $$ReadingControls, { "readingTime": readingTime })} </div> <!-- Content Container --> <div class="max-w-3xl mx-auto"> <div class="prose prose-lg prose-slate dark:prose-invert max-w-none leading-relaxed"> ${renderSlot($$result2, $$slots["default"])}  ${moral && renderTemplate`<div class="moral-section mt-12 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)] p-6 rounded-r-xl"> <h3 class="text-xl font-bold text-[var(--color-text-main)] mb-2 flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lightbulb", "size": 24, "class": "text-[var(--color-accent)]" })}
கதையின் நீதி (Moral of the Story)
</h3> <p class="text-lg text-[var(--color-text-muted)] italic font-medium leading-relaxed"> ${moral} </p> </div>`} </div> </div> <!-- Share Section --> <div class="max-w-3xl mx-auto mt-12 pt-8 border-t border-[var(--color-border)]"> <h4 class="font-semibold text-[var(--color-text-main)] mb-4 text-center">
இக்கதையை பகிரவும்
</h4> <div class="flex justify-center gap-3"> <a${addAttribute(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-transform border border-[#25D366]/20" title="WhatsApp-ல் பகிர்"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "message-circle", "size": 22 })} </a> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="w-11 h-11 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-105 transition-transform border border-[#1DA1F2]/20" title="Twitter-ல் பகிர்"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "twitter", "size": 22 })} </a> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="w-11 h-11 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-105 transition-transform border border-[#1877F2]/20" title="Facebook-ல் பகிர்"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "facebook", "size": 22 })} </a> <button id="copy-link-mobile" class="w-11 h-11 rounded-full bg-[var(--color-text-main)] text-[var(--color-bg)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:scale-105 transition-all border border-[var(--color-border)]" title="இணைப்பை நகலெடு"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "link", "size": 22 })} </button> </div> </div> <!-- Navigation --> <div class="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row gap-4 justify-between"> <a href="/blog" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-main)] rounded-xl font-medium text-sm hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-left", "size": 16 })}
அனைத்து கதைகளும்
</a> <button id="scroll-to-top" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-xl font-medium text-sm hover:bg-[var(--color-text-main)] transition-all duration-300 border border-[var(--color-accent)]/20"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-up", "size": 16 })}
மேலே செல்
</button> </div> </article> </main> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(articleSchema), unescapeHTML(breadcrumbSchema)) })}` })} ${renderComponent($$result, "Footer", $$Footer, {})}  ${renderScript($$result, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/layouts/BlogPost.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
