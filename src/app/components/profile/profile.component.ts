import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profile: Profile | null = null;
  originalProfile: Profile | null = null;
  newPassword: string = '';
  confirmPassword: string = '';
  saving = false;

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.gameService.getProfiles().subscribe({
      next: (profiles) => {
        if (profiles && profiles.length > 0) {
          this.profile = { ...profiles[0] }; // Create a copy for editing
          this.originalProfile = { ...profiles[0] }; // Keep original for comparison
        }
      },
      error: (error) => {
        console.error('Error loading profile:', error);
      }
    });
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n.charAt(0)).join('').toUpperCase();
  }

  getAvatarColor(name: string): string {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  }

  getListIcon(listName: string): string {
    const iconMap: { [key: string]: string } = {
      'Play Later': 'fa-clock',
      'Currently Playing': 'fa-play',
      'Played': 'fa-check',
      'Completed': 'fa-trophy'
    };
    return iconMap[listName] || 'fa-list';
  }

  removeAvatar() {
    if (this.profile) {
      this.profile.avatar = '';
    }
  }

  generateRandomAvatar() {
    // Generate a random avatar URL (in a real app, you'd use a proper avatar service)
    const randomAvatars = [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Midnight'
    ];

    if (this.profile) {
      this.profile.avatar = randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
    }
  }

  saveProfile() {
    if (!this.profile) return;

    // Validate password confirmation
    if (this.newPassword && this.newPassword !== this.confirmPassword) {
      this.showNotification('As senhas não coincidem', 'error');
      return;
    }

    // Update password if provided
    if (this.newPassword) {
      this.profile.password = this.newPassword;
    }

    this.saving = true;

    this.gameService.editProfile(this.profile).subscribe({
      next: (updatedProfile) => {
        this.profile = updatedProfile;
        this.originalProfile = { ...updatedProfile };
        this.newPassword = '';
        this.confirmPassword = '';
        this.saving = false;
        this.showNotification('Perfil atualizado com sucesso!', 'success');
      },
      error: (error) => {
        console.error('Error updating profile:', error);
        this.saving = false;
        this.showNotification('Erro ao atualizar perfil', 'error');
      }
    });
  }

  cancelEdit() {
    if (this.originalProfile) {
      this.profile = { ...this.originalProfile };
    }
    this.newPassword = '';
    this.confirmPassword = '';
    this.router.navigate(['/games']);
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

  getTotalGames(): number {
    if (!this.profile?.lists) return 0;
    return this.profile.lists.reduce((total, list) => total + (list.gamesIds?.length || 0), 0);
  }

  trackByListId(index: number, list: any): string {
    return list.id || index;
  }

  getListProgress(list: any): number {
    // This is a placeholder - in a real app you might want to track completion progress
    // For now, we'll show a random progress between 0-100%
    if (!list.gamesIds?.length) return 0;
    return Math.min(100, (list.gamesIds.length / 10) * 100); // Assuming 10 games = 100% progress
  }
}
