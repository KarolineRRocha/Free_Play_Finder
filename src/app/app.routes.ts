import { Routes } from "@angular/router";
import { GameListComponent } from "./components/games-list/games-list.component";

export const routes: Routes = [
  { title: "Games", path: "games", component: GameListComponent },
];
