export async function onRequest({ request, env }) {
    const url = new URL(request.url);
    const path = url.pathname;

    // If it's clearly a static asset (has an extension or lives under /assets), serve it directly.
    const isAsset = path.startsWith('/assets/')
        || /\.[a-z0-9]+$/i.test(path)   // e.g., .js, .css, .svg, etc.
        || path === '/favicon.ico'
        || path === '/robots.txt'
        || path === '/sitemap.xml';

    if (isAsset) {
        return env.ASSETS.fetch(request);
    }

    // Otherwise: serve index.html so the SPA router can handle it client-side.
    const indexReq = new Request(new URL('/index.html', url.origin), request);
    return env.ASSETS.fetch(indexReq);
}