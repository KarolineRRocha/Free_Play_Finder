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
  playedGames: Array<Game> = [];

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
    addGameToPlayed(gameId: string) {
      const gameToAdd = this.games.find(game => game.id === gameId);
      if (gameToAdd && !this.playedGames.includes(gameToAdd)) {
        this.playedGames.push(gameToAdd);
      }
      console.log(this.playedGames);
    }
  }
