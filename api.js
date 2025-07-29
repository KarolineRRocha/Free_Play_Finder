// FreePlayFinder API Server
// Este script serve a API usando o arquivo api.json

let apiData = null;

// Carregar os dados da API
async function loadApiData() {
  try {
    const response = await fetch('./api.json');
    apiData = await response.json();
    console.log('API data loaded successfully');
  } catch (error) {
    console.error('Error loading API data:', error);
  }
}

// Função para servir os endpoints da API
function serveApiEndpoint(path) {
  if (!apiData) {
    return new Response(JSON.stringify({ error: 'API data not loaded' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const endpoint = path.replace('/api/', '');

  switch (endpoint) {
    case 'profile':
      return new Response(JSON.stringify(apiData.profile), {
        headers: { 'Content-Type': 'application/json' }
      });
    case 'gamesList':
      return new Response(JSON.stringify(apiData.gamesList), {
        headers: { 'Content-Type': 'application/json' }
      });
    case 'gameDetails':
      return new Response(JSON.stringify(apiData.gameDetails), {
        headers: { 'Content-Type': 'application/json' }
      });
    case 'genres':
      return new Response(JSON.stringify(apiData.genres), {
        headers: { 'Content-Type': 'application/json' }
      });
    case 'platforms':
      return new Response(JSON.stringify(apiData.platforms), {
        headers: { 'Content-Type': 'application/json' }
      });
    default:
      return new Response(JSON.stringify({ error: 'Endpoint not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
  }
}

// Interceptar requisições para a API
if (typeof window !== 'undefined') {
  // No navegador, usar Service Worker ou interceptar fetch
  window.addEventListener('load', () => {
    loadApiData();

    // Interceptar requisições fetch para a API
    const originalFetch = window.fetch;
    window.fetch = function (url, options) {
      if (typeof url === 'string' && url.includes('/api/')) {
        const response = serveApiEndpoint(url);
        return Promise.resolve(response);
      }
      return originalFetch.apply(this, arguments);
    };
  });
}

// Para uso em Service Worker (se necessário)
if (typeof self !== 'undefined' && self.addEventListener) {
  self.addEventListener('fetch', event => {
    if (event.request.url.includes('/api/')) {
      event.respondWith(serveApiEndpoint(event.request.url));
    }
  });
} 