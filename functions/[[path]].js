export async function onRequest({ request, env }) {
    const url = new URL(request.url);

    // 1) Try the real asset first
    let res = await env.ASSETS.fetch(request);
    if (res.status !== 404) return res;

    // 2) If it's a client-side route (no file extension), serve index.html
    const looksLikeAsset = /\.\w+$/.test(url.pathname);
    if (!looksLikeAsset) {
        const indexReq = new Request(new URL('/index.html', url.origin), request);
        return env.ASSETS.fetch(indexReq);
    }

    // 3) Fall back to original 404 (e.g., missing real asset)
    return res;
}