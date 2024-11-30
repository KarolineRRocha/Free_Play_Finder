import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GameService } from './../../services/game.service';
import { Game } from '../../models/game'

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Array<Game> = [];

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

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