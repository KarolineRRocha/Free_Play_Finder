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
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public games: Array<Game> = [];

  constructor(private http: HttpClient, private apiConfig: ApiConfigService) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiConfig.getApiUrl('gamesList'));
  }

  getGameDetails(id: string): Observable<GameDetails> {
    return this.http.get<GameDetails>(this.apiConfig.getApiUrl(`gameDetails/${id}`));
  }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiConfig.getApiUrl('profile'));
  }

  getPlatforms(): Observable<Platforms[]> {
    return this.http.get<Platforms[]>(this.apiConfig.getApiUrl('platforms'));
  }

  getGenres(): Observable<Genres[]> {
    return this.http.get<Genres[]>(this.apiConfig.getApiUrl('genres'));
  }

  addGame(game: Game) {
    return this.games.push(game);
  }

  addProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.apiConfig.getApiUrl('profile/'), profile);
  }

  editProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.apiConfig.getApiUrl('profile/'), profile);
  }

  // List management methods
  addGameToList(profileId: string, listId: string, gameId: string): Observable<Profile> {
    return this.http.patch<Profile>(this.apiConfig.getApiUrl(`profile/${profileId}`), {
      lists: [{ id: listId, gamesIds: [gameId] }]
    });
  }

  removeGameFromList(profileId: string, listId: string, gameId: string): Observable<Profile> {
    return this.http.patch<Profile>(this.apiConfig.getApiUrl(`profile/${profileId}`), {
      lists: [{ id: listId, gamesIds: [gameId] }]
    });
  }

  moveGameBetweenLists(profileId: string, fromListId: string, toListId: string, gameId: string): Observable<Profile> {
    return this.http.patch<Profile>(this.apiConfig.getApiUrl(`profile/${profileId}`), {
      lists: [
        { id: fromListId, gamesIds: [gameId] },
        { id: toListId, gamesIds: [gameId] }
      ]
    });
  }
}