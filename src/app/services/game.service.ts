import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = environment.URL;;

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  getGameById(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`);
  }

  getGamesByPlatform(platform: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}?platform=${platform}`);
  }
}