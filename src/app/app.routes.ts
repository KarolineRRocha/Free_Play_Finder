import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/games-list/games-list.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GameListsComponent } from './components/game-lists/game-lists.component';

export const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { title: 'FreePlayFinder - Home', path: 'home', component: HomeComponent },
  { title: 'FreePlayFinder - Jogos', path: 'games', component: GameListComponent },
  { title: 'FreePlayFinder - Detalhes do Jogo', path: 'game/:id', component: GameDetailsComponent },
  { title: 'FreePlayFinder - Perfil', path: 'profile', component: ProfileComponent },
  { title: 'FreePlayFinder - Minhas Listas', path: 'lists', component: GameListsComponent },
];