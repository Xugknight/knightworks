export async function onRequest({ request, env }) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // 1) Canonicalize host: redirect www → apex (preserve path & query)
    if (url.hostname === 'www.knightworks.dev') {
        const location = `https://knightworks.dev${url.pathname}${url.search}`;
        return Response.redirect(location, 301);
    }

    // 2) Static asset detection
    const isAsset = path.startsWith('/assets/')
        || /\.[a-z0-9]+$/i.test(path)
        || path === '/favicon.ico'
        || path === '/robots.txt'
        || path === '/sitemap.xml';

    let resp;
    if (isAsset) {
        resp = await env.ASSETS.fetch(request);
    } else {
        // SPA fallback: fetch "/" (NOT /index.html) to avoid the 308-to-/ behavior
        const indexReq = new Request(new URL('/', url.origin), { method: 'GET', headers: request.headers });
        resp = await env.ASSETS.fetch(indexReq);
    }

    // (optional) keep the debug header for one more deploy, then remove later
    const out = new Response(method === 'HEAD' ? null : resp.body, resp);
    out.headers.set('x-knightworks-fn', 'hit');
    return out;
}