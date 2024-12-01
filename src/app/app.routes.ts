import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { GameListComponent } from "./components/games-list/games-list.component";
import { GameDetailsComponent } from "./components/game-details/game-details.component";
import { ListProfileComponent } from "./components/list-profile/list-profile.component";

export const routes: Routes = [
  // { path: '', redirectTo: '/games', pathMatch: 'full' },
  { title: "Home Page", path: "home", component: HomeComponent },
  { title: "Games", path: "games", component: GameListComponent },
  { title: "Game Detail", path: "game/:id", component: GameDetailsComponent },
  { path: "games/:id", component: GameDetailsComponent },
  { title: "Profile", path: "profile", component: ListProfileComponent },
];
