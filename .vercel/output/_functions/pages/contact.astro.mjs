import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CH8WiV83.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../chunks/BlogPost_D_mILsK0.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Contact Us";
  const pageDescription = "Contact TamilKathai - We'd love to hear from you.";
  const pubDate = /* @__PURE__ */ new Date("August 08 2021");
  const contactEmail = "contact@tamilkathai.in";
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": pageTitle, "description": pageDescription, "pubDate": pubDate }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Contact Us</h2> <p>
If you have any questions about this Privacy Policy, the practices of
        this site, or your dealings with this site, please contact us.
</p> <p>
We value your feedback and suggestions. Whether you have a story
        request, a suggestion for improvement, or just want to say hello, we are
        here to listen.
</p> <div class="contact-info" style="margin-top: 2rem; padding: 2rem; background-color: var(--color-bg-secondary); border-radius: 8px; border: 1px solid var(--color-border);"> <h3 style="margin-top: 0;">Email Us</h3> <p>For all inquiries, please email us at:</p> <p> <a${addAttribute(`mailto:${contactEmail}`, "href")} style="font-weight: bold; font-size: 1.2rem;">${contactEmail}</a> </p> <p>We aim to respond to all emails within 24-48 hours.</p> </div> ` })}`;
}, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/pages/contact.astro", void 0);

const $$file = "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
