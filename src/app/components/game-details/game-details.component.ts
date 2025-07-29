import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDetails } from '../../models/gameDetails';
import { Profile } from '../../models/profile';
import { Lists } from '../../models/lists';
import { GameService } from '../../services/game.service';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule, Nl2brPipe],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent implements OnInit {
  gameDetails: GameDetails | null = null;
  profile: Profile | null = null;
  loading = true;
  selectedScreenshot: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.loadGameDetails();
    this.loadProfile();
  }

  loadGameDetails() {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId) {
      this.gameService.getGameDetails(gameId).subscribe({
        next: (details: GameDetails) => {
          this.gameDetails = details;
          this.loading = false;
        },
        error: (error: any) => {
          console.error('Error loading game details:', error);
          this.loading = false;
        }
      });
    }
  }

  loadProfile() {
    this.gameService.getProfiles().subscribe({
      next: (profiles: Profile[]) => {
        if (profiles && profiles.length > 0) {
          this.profile = profiles[0];
        }
      },
      error: (error: any) => {
        console.error('Error loading profile:', error);
      }
    });
  }

  goBack() {
    this.router.navigate(['/games']);
  }

  isGameInList(list: Lists, gameId: string | undefined): boolean {
    if (!gameId) return false;
    return list.gamesIds?.includes(gameId) || false;
  }

  toggleGameInList(list: Lists, gameId: string | undefined) {
    if (!this.profile || !gameId) return;

    const isInList = this.isGameInList(list, gameId);

    if (isInList) {
      // Remove from list
      this.removeGameFromList(list, gameId);
    } else {
      // Add to list
      this.addGameToList(list, gameId);
    }
  }

  addGameToList(list: Lists, gameId: string) {
    if (!this.profile || !list.id || !gameId) return;

    // Remove from other lists first
    this.profile.lists.forEach(l => {
      if (l.gamesIds) {
        l.gamesIds = l.gamesIds.filter(id => id !== gameId);
      }
    });

    // Add to selected list
    if (!list.gamesIds) {
      list.gamesIds = [];
    }
    list.gamesIds.push(gameId);

    this.gameService.editProfile(this.profile).subscribe({
      next: (updatedProfile: Profile) => {
        this.profile = updatedProfile;
        this.showNotification('Jogo adicionado à lista com sucesso!', 'success');
      },
      error: (error: any) => {
        console.error('Error adding game to list:', error);
        this.showNotification('Erro ao adicionar jogo à lista', 'error');
      }
    });
  }

  removeGameFromList(list: Lists, gameId: string) {
    if (!this.profile || !list.gamesIds || !gameId) return;

    list.gamesIds = list.gamesIds.filter(id => id !== gameId);

    this.gameService.editProfile(this.profile).subscribe({
      next: (updatedProfile: Profile) => {
        this.profile = updatedProfile;
        this.showNotification('Jogo removido da lista com sucesso!', 'success');
      },
      error: (error: any) => {
        console.error('Error removing game from list:', error);
        this.showNotification('Erro ao remover jogo da lista', 'error');
      }
    });
  }

  openScreenshotModal(imageUrl: string) {
    this.selectedScreenshot = imageUrl;
    // Note: In a real implementation, you'd use a proper modal service
    // For now, we'll just store the selected image
  }

  showNotification(message: string, type: 'success' | 'error') {
    // Create a simple notification
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
