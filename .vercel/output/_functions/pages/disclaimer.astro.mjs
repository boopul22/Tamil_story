import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CH8WiV83.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../chunks/BlogPost_D_mILsK0.mjs';
export { renderers } from '../renderers.mjs';

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Disclaimer";
  const pageDescription = "Disclaimer for TamilKathai.";
  const pubDate = /* @__PURE__ */ new Date("August 08 2021");
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": pageTitle, "description": pageDescription, "pubDate": pubDate }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Disclaimer for TamilKathai</h2> <p>
If you require any more information or have any questions about our
        site's disclaimer, please feel free to contact us by email.
</p> <h3>Disclaimers for TamilKathai</h3> <p>
All the information on this website - https://tamilkathai.in - is
        published in good faith and for general information purpose only.
        TamilKathai does not make any warranties about the completeness,
        reliability and accuracy of this information. Any action you take upon
        the information you find on this website (TamilKathai), is strictly at
        your own risk. TamilKathai will not be liable for any losses and/or
        damages in connection with the use of our website.
</p> <p>
From our website, you can visit other websites by following hyperlinks
        to such external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone 'bad'.
</p> <p>
Please be also aware that when you leave our website, other sites may
        have different privacy policies and terms which are beyond our control.
        Please be sure to check the Privacy Policies of these sites as well as
        their "Terms of Service" before engaging in any business or uploading
        any information.
</p> <h3>Consent</h3> <p>
By using our website, you hereby consent to our disclaimer and agree to
        its terms.
</p> <h3>Update</h3> <p>
Should we update, amend or make any changes to this document, those
        changes will be prominently posted here.
</p> ` })}`;
}, "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/pages/disclaimer.astro", void 0);

const $$file = "/Users/bipulkumar/Documents/WebsiteUpdate/Tamil_Story/src/pages/disclaimer.astro";
const $$url = "/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Disclaimer,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
