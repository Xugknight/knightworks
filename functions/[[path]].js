export async function onRequest(context) {
    const { request, env, next } = context;
    const url = new URL(request.url);
    const path = url.pathname;

    // Let real files/paths pass through (anything with a dot, and the root "/")
    if (path === "/" || path.includes(".")) {
        return next();
    }

    // For all other paths, serve the SPA shell
    url.pathname = "/index.html";
    return env.ASSETS.fetch(new Request(url, request));
}