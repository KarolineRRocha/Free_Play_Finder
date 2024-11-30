import { Component } from "@angular/core";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  RouterModule,
} from "@angular/router";
import { GameListComponent } from "./components/games-list/games-list.component";
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    GameListComponent,
    NavComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "FreePlayFinder";
}
