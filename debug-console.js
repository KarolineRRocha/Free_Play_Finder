// Debug script para verificar carregamento dos dados
console.log('🔍 Debug: Verificando carregamento dos dados...');

// Função para verificar dados
function checkData() {
  console.log('📊 Status dos dados:');
  console.log('- window.gamesData:', window.gamesData);

  if (window.gamesData) {
    console.log('- gamesList length:', window.gamesData.gamesList?.length);
    console.log('- gameDetails length:', window.gamesData.gameDetails?.length);
    console.log('- profile:', window.gamesData.profile);
    console.log('- genres:', window.gamesData.genres);
    console.log('- platforms:', window.gamesData.platforms);

    // Verificar se há dados específicos
    if (window.gamesData.gamesList && window.gamesData.gamesList.length > 0) {
      console.log('- Primeiro jogo:', window.gamesData.gamesList[0]);
    }
  } else {
    console.log('❌ window.gamesData não está definido');
  }
}

// Verificar após um delay
setTimeout(checkData, 1000);
setTimeout(checkData, 3000);
setTimeout(checkData, 5000);

// Verificar se a API mock está funcionando
console.log('🔧 Verificando API Mock...');
console.log('- fetch interceptado:', typeof window.fetch);

// Testar uma requisição
setTimeout(() => {
  console.log('🧪 Testando requisição para gamesList...');
  fetch('/api/gamesList')
    .then(response => response.json())
    .then(data => {
      console.log('✅ Resposta da API:', data);
    })
    .catch(error => {
      console.log('❌ Erro na requisição:', error);
    });
}, 2000); 