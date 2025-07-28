import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Game } from '../../models/game';
import { Profile } from '../../models/profile';
import { Lists } from '../../models/lists';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-lists.component.html',
  styleUrl: './game-lists.component.scss'
})
export class GameListsComponent implements OnInit {
  profile: Profile | null = null;
  games: Game[] = [];
  loading = true;
  selectedList: Lists | null = null;
  selectedGameId: string = '';

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadProfile();
    this.loadGames();
  }

  loadProfile() {
    this.gameService.getProfiles().subscribe({
      next: (profiles) => {
        if (profiles && profiles.length > 0) {
          this.profile = profiles[0];
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading profile:', error);
        this.loading = false;
      }
    });
  }

  loadGames() {
    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
      },
      error: (error) => {
        console.error('Error loading games:', error);
      }
    });
  }

  getGamesInList(list: Lists): Game[] {
    if (!list.gamesIds || !this.games.length) return [];

    return this.games.filter(game =>
      list.gamesIds?.includes(game.id || '')
    );
  }

  getListIcon(listName: string | undefined): string {
    if (!listName) return 'fa-list';

    const iconMap: { [key: string]: string } = {
      'Play Later': 'fa-clock',
      'Currently Playing': 'fa-play',
      'Played': 'fa-check',
      'Completed': 'fa-trophy'
    };
    return iconMap[listName] || 'fa-list';
  }

  viewGameDetails(gameId: string) {
    this.router.navigate(['/game', gameId]);
  }

  moveGame(list: Lists, gameId: string) {
    this.selectedList = list;
    this.selectedGameId = gameId;
    // In a real implementation, you'd show a modal here
    // For now, we'll just log the action
    console.log(`Moving game ${gameId} from list ${list.name}`);
  }

  confirmMoveGame(targetList: Lists) {
    if (!this.selectedList || !this.selectedGameId || !this.profile) return;

    // Remove from current list
    if (this.selectedList.gamesIds) {
      this.selectedList.gamesIds = this.selectedList.gamesIds.filter(id => id !== this.selectedGameId);
    }

    // Add to target list
    if (!targetList.gamesIds) {
      targetList.gamesIds = [];
    }
    targetList.gamesIds.push(this.selectedGameId);

    this.gameService.editProfile(this.profile).subscribe({
      next: (updatedProfile) => {
        this.profile = updatedProfile;
        this.showNotification('Jogo movido com sucesso!', 'success');
        this.selectedList = null;
        this.selectedGameId = '';
      },
      error: (error) => {
        console.error('Error moving game:', error);
        this.showNotification('Erro ao mover jogo', 'error');
      }
    });
  }

  removeGameFromList(list: Lists, gameId: string) {
    if (!this.profile || !list.gamesIds) return;

    list.gamesIds = list.gamesIds.filter(id => id !== gameId);

    this.gameService.editProfile(this.profile).subscribe({
      next: (updatedProfile) => {
        this.profile = updatedProfile;
        this.showNotification('Jogo removido da lista com sucesso!', 'success');
      },
      error: (error) => {
        console.error('Error removing game from list:', error);
        this.showNotification('Erro ao remover jogo da lista', 'error');
      }
    });
  }

  moveAllGames(list: Lists) {
    // This would implement moving all games from one list to another
    console.log(`Moving all games from list ${list.name}`);
  }

  clearList(list: Lists) {
    if (!this.profile) return;

    if (confirm(`Tem certeza que deseja limpar a lista "${list.name}"?`)) {
      list.gamesIds = [];

      this.gameService.editProfile(this.profile).subscribe({
        next: (updatedProfile) => {
          this.profile = updatedProfile;
          this.showNotification('Lista limpa com sucesso!', 'success');
        },
        error: (error) => {
          console.error('Error clearing list:', error);
          this.showNotification('Erro ao limpar lista', 'error');
        }
      });
    }
  }

  showNotification(message: string, type: 'success' | 'error') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'} position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }
}
