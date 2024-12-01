import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { Lists } from "../../models/lists";
import { Profile } from "../../models/profile";
import { GameService } from "../../services/game.service";

@Component({
  selector: "app-list-profile",
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: "./list-profile.component.html",
  styleUrl: "./list-profile.component.css",
})
export class ListProfileComponent {
  //mesma identificacao da API

  list: Lists = {
    id: "",
    name: "",
    gamesIds: Array<string>(),
  };

  profile: Profile = {
    id: "",
    name: "",
    email: "",
    password: "",
    avatar: "",
    lists: Array<Lists>(),
  };

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getProfiles().subscribe({
      next: (data) => {
        this.profile = data;
        console.log(data);
      },
      error: (error) => {
        console.error("ERRO", error);
      },
    });
  }
}
