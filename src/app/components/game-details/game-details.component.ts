import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game';
import { GameDetails } from '../../models/gameDetails';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgIf],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  games?:GameDetails;

  constructor(private gameService: GameService, private route: ActivatedRoute) { 
    this.getGameId()
  }
 
  ngOnInit():void{

  }

  getGameId(){
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId != null) {
      this.gameService.getGameDetails(gameId).subscribe((games) => (this.games = games));
    } else {
      console.error('Game ID not found');
    }
  }
}
