import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GameService } from './../../services/game.service';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { Game } from '../../models/game'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  games: Array<Game> = [];
  filteredGames: Array<Game> = [];
  sortBy: string = '';
  searchTerm: string = '';

  constructor(private gameService: GameService, private HttpClient: HttpClient  ) { }

  ngOnInit() {
    this.gameService.getGames().subscribe({
      next: (data) => {
        this.games = data;
      }
    })
    this.filterAndSortGames();
  }
  filterAndSortGames() {
    this.filteredGames = this.games.filter(game =>
      game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.sortGames();
  }
  sortGames(){
    this.filteredGames.sort((a, b) => {
      switch (this.sortBy) {
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'genre-asc':
          return a.genre.localeCompare(b.genre);
        case 'genre-desc':
          return b.genre.localeCompare(a.genre);
        case 'platform-asc':
          return a.platform.localeCompare(b.platform);
        case 'platform-desc':
          return b.platform.localeCompare(a.platform);
        case 'release-asc':
          return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
        case 'release-desc':
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        default:
          return 0;
      }
    });
  }
  onSortChange() {
    this.filterAndSortGames();
  }

  onSearchChange() {
    this.filterAndSortGames();
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement; // Afirmação de tipo
    const searchTerm = target.value;
      this.filteredGames = this.games.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    }  
  }
