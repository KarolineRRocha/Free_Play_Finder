// API Mock for FreePlayFinder
// Simula endpoints da API usando dados locais

console.log('🔧 Setting up API mock with local data...');

// Aguardar os dados carregarem
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

  // Interceptar todas as requisições HTTP
  if (typeof url === 'string') {
    console.log('🔄 Intercepting HTTP request:', url);

    // Extrair o endpoint da URL
    let endpoint = '';
    if (url.includes('/api/')) {
      endpoint = url.split('/api/')[1];
    } else if (url.includes('localhost:3000/')) {
      endpoint = url.split('localhost:3000/')[1];
    } else if (url.includes('gamesList')) {
      endpoint = 'gamesList';
    } else if (url.includes('gameDetails')) {
      // Para gameDetails, precisamos extrair o ID se houver
      if (url.includes('/')) {
        const parts = url.split('/');
        const lastPart = parts[parts.length - 1];
        if (lastPart && lastPart !== 'gameDetails') {
          // Se há um ID, buscar o jogo específico
          const gameId = lastPart;
          const game = window.gamesData.gameDetails.find(g => g.id === gameId);
          if (game) {
            console.log(`✅ Returning specific game details for ID ${gameId}:`, game);
            return new Response(JSON.stringify(game), {
              headers: { 'Content-Type': 'application/json' }
            });
          }
        }
      }
      endpoint = 'gameDetails';
    } else if (url.includes('profile')) {
      endpoint = 'profile';
    } else if (url.includes('genres')) {
      endpoint = 'genres';
    } else if (url.includes('platforms')) {
      endpoint = 'platforms';
    }

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
        // Se não for um endpoint conhecido, usar o fetch original
        return originalFetch.apply(this, arguments);
    }

    console.log(`✅ Returning data for ${endpoint}:`, data);
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Para outras requisições, usar o fetch original
  return originalFetch.apply(this, arguments);
};

// Mock da API para uso direto
window.mockApi = {
  get: async (endpoint) => {
    await waitForData();

    switch (endpoint) {
      case '/gamesList':
        return window.gamesData.gamesList;
      case '/gameDetails':
        return window.gamesData.gameDetails;
      case '/profile':
        return window.gamesData.profile;
      case '/genres':
        return window.gamesData.genres;
      case '/platforms':
        return window.gamesData.platforms;
      default:
        throw new Error(`Endpoint ${endpoint} not found`);
    }
  },

  post: async (endpoint, data) => {
    await waitForData();

    // Simular salvamento local
    if (endpoint === '/profile') {
      window.gamesData.profile = data;
      return data;
    }
    return data;
  },

  put: async (endpoint, data) => {
    await waitForData();

    // Simular atualização local
    if (endpoint === '/profile') {
      window.gamesData.profile = data;
      return data;
    }
    return data;
  }
};

console.log('✅ API mock setup complete with local data!'); 