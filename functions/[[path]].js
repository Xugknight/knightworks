export async function onRequest({ request, env }) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 1) Canonical host
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

    if (isAsset) {
        return env.ASSETS.fetch(request);
    }

    // 3) SPA fallback: fetch "/"
    const indexReq = new Request(new URL('/', url.origin), {
        method: 'GET',
        headers: request.headers,
    });
    return env.ASSETS.fetch(indexReq);
}