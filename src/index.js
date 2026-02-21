export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname === '/' ? '/nacpa-gala-variation-1.html' : url.pathname;

    try {
      const response = await ASSETS.fetch(new Request(new URL('.' + path, request.url), request));
      return response;
    } catch (e) {
      return new Response('Not found', { status: 404 });
    }
  },
};
