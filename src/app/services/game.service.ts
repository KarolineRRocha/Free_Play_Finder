import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from '../models/game';
import { Genres } from './../models/genres';
import { GameDetails } from './../models/gameDetails';
import { Lists } from '../models/lists';
import { MinimumSystemRequirements } from '../models/minimumSystemRequirements';
import { Platforms } from '../models/platforms';
import { Profile } from '../models/profile';
import { Screenshots } from '../models/screenshots';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public games: Array<Game> = [];

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`http://localhost:3000/gamesList`);
  }

  getGameDetails(id: string): Observable<GameDetails> {
    return this.http.get<GameDetails>(`http://localhost:3000/gameDetails/${id}`);
  }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>("http://localhost:3000/profile");
  }

  getPlatforms(): Observable<Platforms[]> {
    return this.http.get<Platforms[]>("http://localhost:3000/platforms");
  }

  getGenres(): Observable<Genres[]> {
    return this.http.get<Genres[]>("http://localhost:3000/genres");
  }

  addGame(game: Game) {
    return this.games.push(game);
  }

  addProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`http://localhost:3000/profile/`, profile);
  }

  editProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`http://localhost:3000/profile/`, profile);
  }

  // List management methods
  addGameToList(profileId: string, listId: string, gameId: string): Observable<Profile> {
    return this.http.patch<Profile>(`http://localhost:3000/profile/${profileId}`, {
      lists: [{ id: listId, gamesIds: [gameId] }]
    });
  }

  removeGameFromList(profileId: string, listId: string, gameId: string): Observable<Profile> {
    return this.http.patch<Profile>(`http://localhost:3000/profile/${profileId}`, {
      lists: [{ id: listId, gamesIds: [gameId] }]
    });
  }

  moveGameBetweenLists(profileId: string, fromListId: string, toListId: string, gameId: string): Observable<Profile> {
    return this.http.patch<Profile>(`http://localhost:3000/profile/${profileId}`, {
      lists: [
        { id: fromListId, gamesIds: [gameId] },
        { id: toListId, gamesIds: [gameId] }
      ]
    });
  }
}