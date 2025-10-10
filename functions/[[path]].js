export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const path = url.pathname;

  const isAsset = path.startsWith('/assets/')
               || /\.[a-z0-9]+$/i.test(path)
               || path === '/favicon.ico'
               || path === '/robots.txt'
               || path === '/sitemap.xml';

  let resp;
  if (isAsset) {
    resp = await env.ASSETS.fetch(request);
  } else {
    const indexReq = new Request(new URL('/index.html', url.origin), request);
    resp = await env.ASSETS.fetch(indexReq);
  }

  // add a marker so we can see if the Function actually ran
  const out = new Response(resp.body, resp);
  out.headers.set('x-knightworks-fn', 'hit');
  return out;
}