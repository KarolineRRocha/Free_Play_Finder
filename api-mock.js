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

    // Extrair o endpoint da URL - mais robusto
    let endpoint = '';
    let gameId = null;

    // Verificar diferentes padrões de URL
    if (url.includes('/api/')) {
      const path = url.split('/api/')[1];
      if (path.includes('/')) {
        const parts = path.split('/');
        endpoint = parts[0];
        gameId = parts[1];
      } else {
        endpoint = path;
      }
    } else if (url.includes('localhost:3000/')) {
      const path = url.split('localhost:3000/')[1];
      if (path.includes('/')) {
        const parts = path.split('/');
        endpoint = parts[0];
        gameId = parts[1];
      } else {
        endpoint = path;
      }
    } else if (url.includes('Free_Play_Finder/')) {
      // Para GitHub Pages
      const path = url.split('Free_Play_Finder/')[1];
      if (path.includes('/')) {
        const parts = path.split('/');
        endpoint = parts[0];
        gameId = parts[1];
      } else {
        endpoint = path;
      }
    } else if (url.includes('gamesList')) {
      endpoint = 'gamesList';
    } else if (url.includes('gameDetails')) {
      endpoint = 'gameDetails';
      // Extrair ID se houver
      if (url.includes('/')) {
        const parts = url.split('/');
        const lastPart = parts[parts.length - 1];
        if (lastPart && lastPart !== 'gameDetails') {
          gameId = lastPart;
        }
      }
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
        if (gameId) {
          // Retornar jogo específico
          data = window.gamesData.gameDetails.find(g => g.id === gameId);
          if (!data) {
            console.log(`❌ Game with ID ${gameId} not found`);
            return new Response(JSON.stringify({ error: 'Game not found' }), {
              status: 404,
              headers: { 'Content-Type': 'application/json' }
            });
          }
        } else {
          // Retornar todos os detalhes
          data = window.gamesData.gameDetails;
        }
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
        console.log(`⚠️ Unknown endpoint: ${endpoint}, using original fetch`);
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