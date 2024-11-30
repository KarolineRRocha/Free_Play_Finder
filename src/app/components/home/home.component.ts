import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GameService } from './../../services/game.service';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { Game } from '../../models/game'

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
  sortBy: string = 'title-asc';
  searchTerm: string = '';

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe({
      next: (data) => {
        this.games = data;
      }
    })
  }
  onSearch(event: Event) {
    const target = event.target as HTMLInputElement; // Afirmação de tipo
    const searchTerm = target.value;
    this.filteredGames = this.games.filter(game => 
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
