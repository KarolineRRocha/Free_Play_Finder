import { Component } from "@angular/core";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  RouterModule,
} from "@angular/router";
import { GameListComponent } from "./components/games-list/games-list.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { ListProfileComponent } from "./components/list-profile/list-profile.component";

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
    HomeComponent,
    ListProfileComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "FreePlayFinder";
}
