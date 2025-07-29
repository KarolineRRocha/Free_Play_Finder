// Data Loader for FreePlayFinder
// Carrega os dados da API e os disponibiliza globalmente

window.FreePlayFinderData = {
  gamesList: [],
  gameDetails: [],
  profile: [],
  genres: [],
  platforms: []
};

// Função para carregar os dados
async function loadGameData() {
  try {
    console.log('Loading game data...');
    const response = await fetch('./api.json');
    const data = await response.json();

    // Disponibilizar os dados globalmente
    window.FreePlayFinderData = {
      gamesList: data.gamesList || [],
      gameDetails: data.gameDetails || [],
      profile: data.profile || [],
      genres: data.genres || [],
      platforms: data.platforms || []
    };

    console.log('Game data loaded successfully:', {
      gamesCount: window.FreePlayFinderData.gamesList.length,
      detailsCount: window.FreePlayFinderData.gameDetails.length,
      profileCount: window.FreePlayFinderData.profile.length
    });

    // Disparar evento quando os dados estiverem carregados
    window.dispatchEvent(new CustomEvent('gameDataLoaded', {
      detail: window.FreePlayFinderData
    }));

  } catch (error) {
    console.error('Error loading game data:', error);
    // Em caso de erro, criar dados de exemplo
    window.FreePlayFinderData = {
      gamesList: [
        {
          id: "1",
          title: "Exemplo de Jogo",
          thumbnail: "https://via.placeholder.com/300x200",
          short_description: "Um jogo de exemplo para demonstração"
        }
      ],
      gameDetails: [],
      profile: [{
        id: "1",
        name: "Usuário",
        lists: [
          {
            id: "1",
            name: "Favoritos",
            gamesIds: []
          },
          {
            id: "2",
            name: "Para Jogar",
            gamesIds: []
          }
        ]
      }],
      genres: [],
      platforms: []
    };
  }
}

// Função para simular endpoints da API
window.mockApi = {
  get: async (endpoint) => {
    await new Promise(resolve => {
      if (window.FreePlayFinderData.gamesList.length > 0) {
        resolve();
      } else {
        window.addEventListener('gameDataLoaded', resolve, { once: true });
      }
    });

    switch (endpoint) {
      case '/gamesList':
        return window.FreePlayFinderData.gamesList;
      case '/gameDetails':
        return window.FreePlayFinderData.gameDetails;
      case '/profile':
        return window.FreePlayFinderData.profile;
      case '/genres':
        return window.FreePlayFinderData.genres;
      case '/platforms':
        return window.FreePlayFinderData.platforms;
      default:
        throw new Error(`Endpoint ${endpoint} not found`);
    }
  },

  post: async (endpoint, data) => {
    // Simular salvamento local
    if (endpoint === '/profile') {
      window.FreePlayFinderData.profile = data;
      return data;
    }
    return data;
  },

  put: async (endpoint, data) => {
    // Simular atualização local
    if (endpoint === '/profile') {
      window.FreePlayFinderData.profile = data;
      return data;
    }
    return data;
  }
};

// Carregar dados quando a página carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadGameData);
} else {
  loadGameData();
} 