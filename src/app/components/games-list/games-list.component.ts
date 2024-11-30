import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameService } from './../../services/game.service';
import { Game } from '../../models/game'

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Array<Game> = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe({
      next: (data) => {
        this.games = data;
      }
    })
  }
}