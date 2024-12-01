import { HttpClientModule } from "@angular/common/http";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Lists } from "../../models/lists";
import { Profile } from "../../models/profile";
import { GameService } from "../../services/game.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-list-profile",
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: "./list-profile.component.html",
  styleUrl: "./list-profile.component.css",
})
export class ListProfileComponent {
  //mesma identificacao da API
  @Input() nome: string = "";
  @Output() mudacaNoNome: EventEmitter<string> = new EventEmitter();

  mudarNome() {
    this.mudacaNoNome.emit(this.nome);
  }

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
  updateUser() {
    this.gameService.editProfile(this.profile).subscribe({
      next: (data) => {
        alert("Dados atualizados");
      },
      error: (erro) => {
        console.error("Algo deu errado:", erro);
      },
    });
  }
}
