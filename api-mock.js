// API Mock for FreePlayFinder
// Intercepta requisições HTTP para simular a API

console.log('🔧 Setting up API mock...');

// Função para aguardar os dados carregarem
function waitForData() {
  return new Promise((resolve) => {
    if (window.gamesData && window.gamesData.gamesList.length > 0) {
      resolve();
    } else {
      window.addEventListener('gamesDataLoaded', resolve, { once: true });
    }
  });
}

// Interceptar requisições fetch
const originalFetch = window.fetch;
window.fetch = async function (url, options) {
  // Aguardar os dados carregarem
  await waitForData();

  // Se for uma requisição para a API local
  if (typeof url === 'string' && url.includes('/api/')) {
    console.log('🔄 Intercepting API request:', url);

    const endpoint = url.split('/api/')[1];
    let data = null;

    switch (endpoint) {
      case 'gamesList':
        data = window.gamesData.gamesList;
        break;
      case 'gameDetails':
        data = window.gamesData.gameDetails;
        break;
      case 'profile':
        data = window.gamesData.profile;
        break;
      case 'genres':
        data = window.gamesData.genres;
        break;
      case 'platforms':
        data = window.gamesData.platforms;
        break;
      default:
        return new Response(JSON.stringify({ error: 'Endpoint not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
    }

    console.log(`✅ Returning data for ${endpoint}:`, data);
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Para outras requisições, usar o fetch original
  return originalFetch.apply(this, arguments);
};

console.log('✅ API mock setup complete!'); 