export async function onRequest({ request, env }) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    const isAsset = path.startsWith('/assets/')
        || /\.[a-z0-9]+$/i.test(path)
        || path === '/favicon.ico'
        || path === '/robots.txt'
        || path === '/sitemap.xml';

    let resp;
    if (isAsset) {
        // Serve actual static files directly
        resp = await env.ASSETS.fetch(request);
    } else {
        // SPA fallback: fetch "/" (NOT /index.html) with GET to avoid 308 → "/"
        const indexReq = new Request(new URL('/', url.origin), { method: 'GET', headers: request.headers });
        resp = await env.ASSETS.fetch(indexReq);
    }

    // Add debug header; keep for now
    const out = new Response(method === 'HEAD' ? null : resp.body, resp);
    out.headers.set('x-knightworks-fn', 'hit');
    return out;
}