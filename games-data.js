// Games Data Loader for FreePlayFinder
// Dados reais de jogos gratuitos populares

console.log('🔄 Loading real games data...');

// Dados de jogos gratuitos reais
const realGamesData = {
  gamesList: [
    {
      id: "1",
      title: "Fortnite",
      thumbnail: "https://cdn2.unrealengine.com/fortnite-chapter-5-battle-pass-1920x1080-1920x1080-881974707.jpg",
      shortDescription: "Battle Royale gratuito da Epic Games com construção e combate intenso.",
      gameUrl: "https://www.fortnite.com/",
      genre: "Battle Royale",
      platform: "PC (Windows)",
      publisher: "Epic Games",
      developer: "Epic Games",
      releaseDate: "2017-07-25",
      freetogameProfileUrl: "https://www.fortnite.com/"
    },
    {
      id: "2",
      title: "Genshin Impact",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/a/a7/Genshin_Impact_logo.png",
      shortDescription: "RPG de mundo aberto com elementos de anime e gacha.",
      gameUrl: "https://genshin.hoyoverse.com/",
      genre: "Action RPG",
      platform: "PC (Windows)",
      publisher: "miHoYo",
      developer: "miHoYo",
      releaseDate: "2020-09-28",
      freetogameProfileUrl: "https://genshin.hoyoverse.com/"
    },
    {
      id: "3",
      title: "League of Legends",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/2/2a/League_of_Legends_2019_vector.svg",
      shortDescription: "MOBA competitivo com mais de 150 campeões únicos.",
      gameUrl: "https://www.leagueoflegends.com/",
      genre: "MOBA",
      platform: "PC (Windows)",
      publisher: "Riot Games",
      developer: "Riot Games",
      releaseDate: "2009-10-27",
      freetogameProfileUrl: "https://www.leagueoflegends.com/"
    },
    {
      id: "4",
      title: "Valorant",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg",
      shortDescription: "FPS tático 5v5 com agentes com habilidades únicas.",
      gameUrl: "https://playvalorant.com/",
      genre: "FPS",
      platform: "PC (Windows)",
      publisher: "Riot Games",
      developer: "Riot Games",
      releaseDate: "2020-06-02",
      freetogameProfileUrl: "https://playvalorant.com/"
    },
    {
      id: "5",
      title: "Apex Legends",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/d/d0/Apex_legends_cover.jpg",
      shortDescription: "Battle Royale com heróis e habilidades únicas.",
      gameUrl: "https://www.ea.com/games/apex-legends",
      genre: "Battle Royale",
      platform: "PC (Windows)",
      publisher: "Electronic Arts",
      developer: "Respawn Entertainment",
      releaseDate: "2019-02-04",
      freetogameProfileUrl: "https://www.ea.com/games/apex-legends"
    },
    {
      id: "6",
      title: "Hearthstone",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/57/Blizzard_Entertainment_Logo_2015.svg",
      shortDescription: "Jogo de cartas estratégico baseado no universo Warcraft.",
      gameUrl: "https://playhearthstone.com/",
      genre: "Card Game",
      platform: "PC (Windows)",
      publisher: "Blizzard Entertainment",
      developer: "Blizzard Entertainment",
      releaseDate: "2014-03-11",
      freetogameProfileUrl: "https://playhearthstone.com/"
    },
    {
      id: "7",
      title: "Warframe",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/2/23/Warframe_logo.png",
      shortDescription: "Action RPG cooperativo com ninjas espaciais.",
      gameUrl: "https://www.warframe.com/",
      genre: "Action RPG",
      platform: "PC (Windows)",
      publisher: "Digital Extremes",
      developer: "Digital Extremes",
      releaseDate: "2013-03-25",
      freetogameProfileUrl: "https://www.warframe.com/"
    },
    {
      id: "8",
      title: "Path of Exile",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/0/0f/Path_of_Exile_logo.png",
      shortDescription: "ARPG dark fantasy com sistema de habilidades complexo.",
      gameUrl: "https://www.pathofexile.com/",
      genre: "ARPG",
      platform: "PC (Windows)",
      publisher: "Grinding Gear Games",
      developer: "Grinding Gear Games",
      releaseDate: "2013-10-23",
      freetogameProfileUrl: "https://www.pathofexile.com/"
    },
    {
      id: "9",
      title: "Dota 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/7/7a/Dota_2_logo.png",
      shortDescription: "MOBA estratégico com mais de 120 heróis.",
      gameUrl: "https://www.dota2.com/",
      genre: "MOBA",
      platform: "PC (Windows)",
      publisher: "Valve",
      developer: "Valve",
      releaseDate: "2013-07-09",
      freetogameProfileUrl: "https://www.dota2.com/"
    },
    {
      id: "10",
      title: "Team Fortress 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/99/Team_Fortress_2_cover.jpg",
      shortDescription: "FPS class-based com 9 classes únicas.",
      gameUrl: "https://www.teamfortress.com/",
      genre: "FPS",
      platform: "PC (Windows)",
      publisher: "Valve",
      developer: "Valve",
      releaseDate: "2007-10-10",
      freetogameProfileUrl: "https://www.teamfortress.com/"
    }
  ],

  gameDetails: [
    {
      id: "1",
      title: "Fortnite",
      thumbnail: "https://cdn2.unrealengine.com/fortnite-chapter-5-battle-pass-1920x1080-1920x1080-881974707.jpg",
      status: "Live",
      shortDescription: "Battle Royale gratuito da Epic Games com construção e combate intenso.",
      description: "Fortnite é um jogo battle royale gratuito desenvolvido pela Epic Games. Os jogadores competem em uma ilha, construindo estruturas e lutando para ser o último sobrevivente. O jogo se destaca por seu sistema único de construção e eventos especiais.",
      gameUrl: "https://www.fortnite.com/",
      genre: "Battle Royale",
      platform: "PC (Windows)",
      publisher: "Epic Games",
      developer: "Epic Games",
      releaseDate: "2017-07-25",
      freetogameProfileUrl: "https://www.fortnite.com/",
      minimumSystemRequirements: {
        "os": "Windows 7/8/10 64-bit",
        "processor": "Intel Core i3-3225 3.3 GHz",
        "memory": "4 GB RAM",
        "graphics": "Intel HD 4000",
        "storage": "16 GB"
      },
      screenshots: [
        {
          "id": "1",
          "image": "https://cdn2.unrealengine.com/fortnite-chapter-5-battle-pass-1920x1080-1920x1080-881974707.jpg"
        }
      ]
    },
    {
      id: "2",
      title: "Genshin Impact",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/a/a7/Genshin_Impact_logo.png",
      status: "Live",
      shortDescription: "RPG de mundo aberto com elementos de anime e gacha.",
      description: "Genshin Impact é um RPG de ação de mundo aberto desenvolvido pela miHoYo. O jogo se passa no mundo de Teyvat, onde os jogadores controlam um viajante que busca seu irmão perdido. Com gráficos deslumbrantes e um sistema de combate fluido.",
      gameUrl: "https://genshin.hoyoverse.com/",
      genre: "Action RPG",
      platform: "PC (Windows)",
      publisher: "miHoYo",
      developer: "miHoYo",
      releaseDate: "2020-09-28",
      freetogameProfileUrl: "https://genshin.hoyoverse.com/",
      minimumSystemRequirements: {
        "os": "Windows 7 SP1 64-bit",
        "processor": "Intel Core i5 or equivalent",
        "memory": "8 GB RAM",
        "graphics": "NVIDIA GeForce GTX 1060 6GB",
        "storage": "30 GB"
      },
      screenshots: [
        {
          "id": "2",
          "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Genshin_Impact_logo.png"
        }
      ]
    },
    {
      id: "3",
      title: "League of Legends",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/2/2a/League_of_Legends_2019_vector.svg",
      status: "Live",
      shortDescription: "MOBA competitivo com mais de 150 campeões únicos.",
      description: "League of Legends é um MOBA competitivo desenvolvido pela Riot Games. Os jogadores controlam campeões únicos com habilidades especiais e trabalham em equipe para destruir a base inimiga. O jogo é conhecido por sua profundidade estratégica e comunidade competitiva.",
      gameUrl: "https://www.leagueoflegends.com/",
      genre: "MOBA",
      platform: "PC (Windows)",
      publisher: "Riot Games",
      developer: "Riot Games",
      releaseDate: "2009-10-27",
      freetogameProfileUrl: "https://www.leagueoflegends.com/",
      minimumSystemRequirements: {
        "os": "Windows 7/8/10 64-bit",
        "processor": "Intel Core i3-530 / AMD A6-3650",
        "memory": "2 GB RAM",
        "graphics": "NVIDIA GeForce 9600GT / AMD HD 6570",
        "storage": "16 GB"
      },
      screenshots: [
        {
          "id": "3",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/2a/League_of_Legends_2019_vector.svg"
        }
      ]
    },
    {
      id: "4",
      title: "Valorant",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg",
      status: "Live",
      shortDescription: "FPS tático 5v5 com agentes com habilidades únicas.",
      description: "Valorant é um FPS tático 5v5 desenvolvido pela Riot Games. Os jogadores escolhem agentes com habilidades únicas e trabalham em equipe para plantar ou desarmar uma bomba. O jogo combina precisão de tiro com estratégia tática.",
      gameUrl: "https://playvalorant.com/",
      genre: "FPS",
      platform: "PC (Windows)",
      publisher: "Riot Games",
      developer: "Riot Games",
      releaseDate: "2020-06-02",
      freetogameProfileUrl: "https://playvalorant.com/",
      minimumSystemRequirements: {
        "os": "Windows 7/8/10 64-bit",
        "processor": "Intel Core i3-370M",
        "memory": "4 GB RAM",
        "graphics": "Intel HD 3000",
        "storage": "8 GB"
      },
      screenshots: [
        {
          "id": "4",
          "image": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg"
        }
      ]
    },
    {
      id: "5",
      title: "Apex Legends",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/d/d0/Apex_legends_cover.jpg",
      status: "Live",
      shortDescription: "Battle Royale com heróis e habilidades únicas.",
      description: "Apex Legends é um battle royale desenvolvido pela Respawn Entertainment. Os jogadores formam equipes de 3 e escolhem heróis com habilidades únicas. O jogo se destaca por seu sistema de ping e comunicação inovador.",
      gameUrl: "https://www.ea.com/games/apex-legends",
      genre: "Battle Royale",
      platform: "PC (Windows)",
      publisher: "Electronic Arts",
      developer: "Respawn Entertainment",
      releaseDate: "2019-02-04",
      freetogameProfileUrl: "https://www.ea.com/games/apex-legends",
      minimumSystemRequirements: {
        "os": "Windows 7 64-bit",
        "processor": "Intel Core i3-6300 / AMD FX-4350",
        "memory": "6 GB RAM",
        "graphics": "NVIDIA GeForce GT 640 / AMD Radeon HD 7730",
        "storage": "22 GB"
      },
      screenshots: [
        {
          "id": "5",
          "image": "https://upload.wikimedia.org/wikipedia/en/d/d0/Apex_legends_cover.jpg"
        }
      ]
    },
    {
      id: "6",
      title: "Hearthstone",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/57/Blizzard_Entertainment_Logo_2015.svg",
      status: "Live",
      shortDescription: "Jogo de cartas estratégico baseado no universo Warcraft.",
      description: "Hearthstone é um jogo de cartas digital desenvolvido pela Blizzard Entertainment. Baseado no universo Warcraft, os jogadores constroem decks e duelam em partidas estratégicas. O jogo é conhecido por sua acessibilidade e profundidade estratégica.",
      gameUrl: "https://playhearthstone.com/",
      genre: "Card Game",
      platform: "PC (Windows)",
      publisher: "Blizzard Entertainment",
      developer: "Blizzard Entertainment",
      releaseDate: "2014-03-11",
      freetogameProfileUrl: "https://playhearthstone.com/",
      minimumSystemRequirements: {
        "os": "Windows 7/8/10 64-bit",
        "processor": "Intel Pentium D / AMD Athlon 64 X2",
        "memory": "2 GB RAM",
        "graphics": "NVIDIA GeForce 8600 GT / AMD Radeon HD 2600",
        "storage": "3 GB"
      },
      screenshots: [
        {
          "id": "6",
          "image": "https://upload.wikimedia.org/wikipedia/en/5/57/Blizzard_Entertainment_Logo_2015.svg"
        }
      ]
    },
    {
      id: "7",
      title: "Warframe",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/2/23/Warframe_logo.png",
      status: "Live",
      shortDescription: "Action RPG cooperativo com ninjas espaciais.",
      description: "Warframe é um action RPG cooperativo desenvolvido pela Digital Extremes. Os jogadores controlam Warframes, exoesqueletos biomecânicos com poderes únicos. O jogo se destaca por seu combate fluido e sistema de progressão profundo.",
      gameUrl: "https://www.warframe.com/",
      genre: "Action RPG",
      platform: "PC (Windows)",
      publisher: "Digital Extremes",
      developer: "Digital Extremes",
      releaseDate: "2013-03-25",
      freetogameProfileUrl: "https://www.warframe.com/",
      minimumSystemRequirements: {
        "os": "Windows 7 64-bit",
        "processor": "Intel Core 2 Duo E6400 / AMD Athlon 64 X2 4000+",
        "memory": "2 GB RAM",
        "graphics": "NVIDIA GeForce 8600 GT / AMD Radeon HD 3600",
        "storage": "25 GB"
      },
      screenshots: [
        {
          "id": "7",
          "image": "https://upload.wikimedia.org/wikipedia/en/2/23/Warframe_logo.png"
        }
      ]
    },
    {
      id: "8",
      title: "Path of Exile",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/0/0f/Path_of_Exile_logo.svg",
      status: "Live",
      shortDescription: "ARPG dark fantasy com sistema de habilidades complexo.",
      description: "Path of Exile é um ARPG dark fantasy desenvolvido pela Grinding Gear Games. O jogo se destaca por seu sistema de habilidades baseado em gemas e sua árvore de passivas massiva. É conhecido por sua complexidade e profundidade.",
      gameUrl: "https://www.pathofexile.com/",
      genre: "ARPG",
      platform: "PC (Windows)",
      publisher: "Grinding Gear Games",
      developer: "Grinding Gear Games",
      releaseDate: "2013-10-23",
      freetogameProfileUrl: "https://www.pathofexile.com/",
      minimumSystemRequirements: {
        "os": "Windows 7 SP1/8/10 64-bit",
        "processor": "Intel Core i3-4130 / AMD FX-6300",
        "memory": "4 GB RAM",
        "graphics": "NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 360",
        "storage": "20 GB"
      },
      screenshots: [
        {
          "id": "8",
          "image": "https://upload.wikimedia.org/wikipedia/en/0/0f/Path_of_Exile_logo.svg"
        }
      ]
    },
    {
      id: "9",
      title: "Dota 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/6f/Dota_2_cover.jpg",
      status: "Live",
      shortDescription: "MOBA estratégico com mais de 120 heróis únicos.",
      description: "Dota 2 é um MOBA estratégico desenvolvido pela Valve. Os jogadores controlam heróis únicos e trabalham em equipe para destruir a base inimiga. O jogo é conhecido por sua complexidade estratégica e comunidade competitiva.",
      gameUrl: "https://www.dota2.com/",
      genre: "MOBA",
      platform: "PC (Windows)",
      publisher: "Valve",
      developer: "Valve",
      releaseDate: "2013-07-09",
      freetogameProfileUrl: "https://www.dota2.com/",
      minimumSystemRequirements: {
        "os": "Windows 7/8/10 64-bit",
        "processor": "Intel Core 2 Duo E7400 / AMD Athlon 64 X2 5600+",
        "memory": "4 GB RAM",
        "graphics": "NVIDIA GeForce 8600 GT / AMD Radeon HD 2600",
        "storage": "15 GB"
      },
      screenshots: [
        {
          "id": "9",
          "image": "https://upload.wikimedia.org/wikipedia/en/6/6f/Dota_2_cover.jpg"
        }
      ]
    },
    {
      id: "10",
      title: "Team Fortress 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/99/Team_Fortress_2_cover.jpg",
      status: "Live",
      shortDescription: "FPS class-based com 9 classes únicas.",
      description: "Team Fortress 2 é um FPS class-based desenvolvido pela Valve. Os jogadores escolhem entre 9 classes únicas, cada uma com habilidades e armas específicas. O jogo é conhecido por seu estilo artístico único e gameplay equilibrado.",
      gameUrl: "https://www.teamfortress.com/",
      genre: "FPS",
      platform: "PC (Windows)",
      publisher: "Valve",
      developer: "Valve",
      releaseDate: "2007-10-10",
      freetogameProfileUrl: "https://www.teamfortress.com/",
      minimumSystemRequirements: {
        "os": "Windows 7/8/10 64-bit",
        "processor": "Intel Pentium 4 3.0 GHz / AMD Athlon 64 3200+",
        "memory": "1 GB RAM",
        "graphics": "NVIDIA GeForce 6600 / AMD Radeon 9600",
        "storage": "15 GB"
      },
      screenshots: [
        {
          "id": "10",
          "image": "https://upload.wikimedia.org/wikipedia/en/9/99/Team_Fortress_2_cover.jpg"
        }
      ]
    }
  ],

  profile: {
    id: "06c2",
    name: "Zé Povinho",
    email: "zpovinho@mail.pt",
    password: "123456",
    avatar: "https://avatars.steamstatic.com/b32358b1a0f188ff07656a0c265b5af916224e96_full.jpg",
    lists: [
      {
        "id": "emif",
        "name": "Play Later",
        "gamesIds": ["1", "3", "5"]
      },
      {
        "id": "qepb",
        "name": "Currently Playing",
        "gamesIds": ["2", "4"]
      },
      {
        "id": "9ou3",
        "name": "Played",
        "gamesIds": ["6"]
      },
      {
        "id": "gypq",
        "name": "Completed",
        "gamesIds": ["7", "8"]
      }
    ]
  },

  genres: [
    {
      "id": "8dbf",
      "name": "Battle Royale"
    },
    {
      "id": "599d",
      "name": "FPS"
    },
    {
      "id": "f828",
      "name": "MOBA"
    },
    {
      "id": "99fe",
      "name": "Action RPG"
    },
    {
      "id": "9bf2",
      "name": "Card Game"
    },
    {
      "id": "fe4a",
      "name": "ARPG"
    }
  ],

  platforms: [
    {
      "id": "4e6c",
      "name": "PC (Windows)"
    },
    {
      "id": "ef6a",
      "name": "Mobile"
    },
    {
      "id": "ea9d",
      "name": "PlayStation"
    }
  ]
};

// Função para carregar os dados
async function loadGamesData() {
  try {
    // Usar dados locais em vez de fazer fetch
    window.gamesData = realGamesData;

    console.log('✅ Real games data loaded successfully!', {
      gamesCount: window.gamesData.gamesList.length,
      detailsCount: window.gamesData.gameDetails.length
    });

    // Disparar evento quando os dados estiverem carregados
    window.dispatchEvent(new CustomEvent('gamesDataLoaded'));

  } catch (error) {
    console.error('❌ Error loading games data:', error);
    // Usar dados de fallback
    window.gamesData = realGamesData;
  }
}

// Carregar dados quando a página carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadGamesData);
} else {
  loadGamesData();
} 