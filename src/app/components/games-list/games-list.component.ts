import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from '../../models/game';
import { Platforms } from '../../models/platforms';
import { Genres } from '../../models/genres';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss'
})
export class GameListComponent implements OnInit {
  games: Game[] = [];
  filteredGames: Game[] = [];
  platforms: Platforms[] = [];
  genres: Genres[] = [];
  loading = true;

  // Search and filter properties
  searchTerm = '';
  selectedPlatform = '';
  selectedGenre = '';
  sortBy = 'title';

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadGames();
    this.loadPlatforms();
    this.loadGenres();
  }

  loadGames() {
    this.loading = true;
    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
        this.applyFilters();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading games:', error);
        this.loading = false;
      }
    });
  }

  loadPlatforms() {
    this.gameService.getPlatforms().subscribe({
      next: (platforms) => {
        this.platforms = platforms;
      },
      error: (error) => {
        console.error('Error loading platforms:', error);
      }
    });
  }

  loadGenres() {
    this.gameService.getGenres().subscribe({
      next: (genres) => {
        this.genres = genres;
      },
      error: (error) => {
        console.error('Error loading genres:', error);
      }
    });
  }

  onSearchChange() {
    this.applyFilters();
  }

  onFilterChange() {
    this.applyFilters();
  }

  onSortChange() {
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.games];

    // Apply search filter
    if (this.searchTerm.trim()) {
      filtered = filtered.filter(game =>
        game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Apply platform filter
    if (this.selectedPlatform) {
      filtered = filtered.filter(game =>
        game.platform === this.selectedPlatform
      );
    }

    // Apply genre filter
    if (this.selectedGenre) {
      filtered = filtered.filter(game =>
        game.genre === this.selectedGenre
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (this.sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case '-title':
          return b.title.localeCompare(a.title);
        case 'releaseDate':
          return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
        case '-releaseDate':
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        default:
          return 0;
      }
    });

    this.filteredGames = filtered;
  }

  viewGameDetails(gameId: string) {
    this.router.navigate(['/game', gameId]);
  }
}