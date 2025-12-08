export { renderers } from '../../../renderers.mjs';

const prerender = false;
async function GET(request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${undefined                           }`) {
    return new Response("Unauthorized", { status: 401 });
  }
  {
    return new Response("Deploy hook not configured", { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
