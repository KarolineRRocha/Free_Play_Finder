import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameService } from './../../services/game.service';
import { Game } from '../../models/game';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild, inject} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importar o módulo de animações


@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatSortModule, CommonModule],
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  animations:[
    trigger('arrowPosition', [
      state('start', style({
        // estilos iniciais
      })),
      state('end', style({
        // estilos finais
      })),
      transition('start => end', [
        animate('500ms')
      ]),
      transition('end => start', [
        animate('500ms')
      ])
    ])
  ]
})
export class GameListComponent implements OnInit {
  games: Array<Game> = [];

  constructor(private gameService: GameService) { }

  displayedColumns: string[] = ['title', 'genre', 'platform', 'releaseDate'];
  dataSource!: MatTableDataSource<Game>;

  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {
    this.gameService.getGames().subscribe({
      next: (data) => {
        this.games = data;
        this.dataSource = new MatTableDataSource(data);
      
      }
    })
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }
}