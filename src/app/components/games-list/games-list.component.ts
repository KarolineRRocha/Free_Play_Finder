import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game'

@Component({
  selector: 'app-game-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      (data) => {
        this.games = data;
      },
      (error) => {
        console.error('Erro ao carregar jogos', error);
      }
    );
  }
}