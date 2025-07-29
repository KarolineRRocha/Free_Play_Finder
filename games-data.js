// Games Data Loader for FreePlayFinder
// Carrega os dados dos jogos diretamente do api.json

console.log('🔄 Loading games data...');

// Função para carregar os dados
async function loadGamesData() {
  try {
    const response = await fetch('./api.json');
    const data = await response.json();

    // Disponibilizar os dados globalmente
    window.gamesData = {
      gamesList: data.gamesList || [],
      gameDetails: data.gameDetails || [],
      profile: data.profile || [],
      genres: data.genres || [],
      platforms: data.platforms || []
    };

    console.log('✅ Games data loaded successfully!', {
      gamesCount: window.gamesData.gamesList.length,
      detailsCount: window.gamesData.gameDetails.length
    });

    // Disparar evento quando os dados estiverem carregados
    window.dispatchEvent(new CustomEvent('gamesDataLoaded'));

  } catch (error) {
    console.error('❌ Error loading games data:', error);

    // Dados de exemplo em caso de erro
    window.gamesData = {
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
          { id: "1", name: "Favoritos", gamesIds: [] },
          { id: "2", name: "Para Jogar", gamesIds: [] }
        ]
      }],
      genres: [],
      platforms: []
    };
  }
}

// Carregar dados quando a página carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadGamesData);
} else {
  loadGamesData();
} 