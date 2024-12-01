import { Profile } from './../../models/profile';
import { Component, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lists } from "./../../models/lists";
import { GameService } from "./../../services/game.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  profile : Profile = {
    id : "",
    name : "",
    email : "",
    password : "",
    avatar : "",
    lists : Array<Lists>()
  }

  constructor(private app : GameService ) {}

  ngOnInit(){
    this.app.getProfiles().subscribe({
      next: (data) => {
        this.profile = data.length > 0 ? data[0] : this.profile;;
      },

      error: (erro) =>{
        console.error("Oops! Erro", erro);
      }
    });
  }
 
  updateUser()
  {
    this.app.editProfile(this.profile).subscribe({
      next: (data) => {
        console.log("Profile atualizado com sucesso",data);
        
      },
      error: (erro) =>{
        console.error("Oops! Erro ", erro);
      }
    });
  }

  removePhotoUser()
  {
    this.profile.avatar = "https://vineview.com/wp-content/uploads/2017/07/avatar-no-photo.png";

    this.app.editProfile(this.profile).subscribe({
      next: (data) => {
        console.log("Foto removida com sucesso",data);
      
      },
      error: (erro) =>{
        console.error("Oops! Erro ", erro);
      }
    });
  }
 };



