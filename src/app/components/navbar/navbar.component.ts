import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Profile } from '../../models/profile';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  profile: Profile | null = null;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.gameService.getProfiles().subscribe({
      next: (profiles) => {
        if (profiles && profiles.length > 0) {
          this.profile = profiles[0]; // Get first profile for now
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

  logout() {
    // For now, just reload the page
    window.location.reload();
  }
}
