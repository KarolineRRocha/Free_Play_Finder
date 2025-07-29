import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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
  private apiData: any = null;
  private isProduction = window.location.hostname !== 'localhost';

  constructor(private http: HttpClient) { }

  private loadApiData(): Observable<any> {
    if (this.apiData) {
      return of(this.apiData);
    }

    return this.http.get('./assets/api.json').pipe(
      map(data => {
        this.apiData = data;
        return data;
      }),
      catchError(error => {
        console.error('Error loading api.json:', error);
        return of(null);
      })
    );
  }

  getGames(): Observable<Game[]> {
    if (this.isProduction) {
      return this.loadApiData().pipe(
        map(data => data?.gamesList || [])
      );
    }
    return this.http.get<Game[]>(`http://localhost:3000/gamesList`);
  }

  getGameDetails(id: string): Observable<GameDetails> {
    if (this.isProduction) {
      return this.loadApiData().pipe(
        map(data => {
          const gameDetails = data?.gameDetails?.find((game: any) => game.id === id);
          return gameDetails || null;
        })
      );
    }
    return this.http.get<GameDetails>(`http://localhost:3000/gameDetails/${id}`);
  }

  getProfiles(): Observable<Profile[]> {
    if (this.isProduction) {
      return this.loadApiData().pipe(
        map(data => data?.profile ? [data.profile] : [])
      );
    }
    return this.http.get<Profile[]>("http://localhost:3000/profile");
  }

  getPlatforms(): Observable<Platforms[]> {
    if (this.isProduction) {
      return this.loadApiData().pipe(
        map(data => data?.platforms || [])
      );
    }
    return this.http.get<Platforms[]>("http://localhost:3000/platforms");
  }

  getGenres(): Observable<Genres[]> {
    if (this.isProduction) {
      return this.loadApiData().pipe(
        map(data => data?.genres || [])
      );
    }
    return this.http.get<Genres[]>("http://localhost:3000/genres");
  }

  addGame(game: Game) {
    return this.games.push(game);
  }

  addProfile(profile: Profile): Observable<Profile> {
    if (this.isProduction) {
      // Em produção, apenas simular a operação
      return of(profile);
    }
    return this.http.put<Profile>(`http://localhost:3000/profile/`, profile);
  }

  editProfile(profile: Profile): Observable<Profile> {
    if (this.isProduction) {
      // Em produção, apenas simular a operação
      return of(profile);
    }
    return this.http.put<Profile>(`http://localhost:3000/profile/`, profile);
  }

  // List management methods
  addGameToList(profileId: string, listId: string, gameId: string): Observable<Profile> {
    if (this.isProduction) {
      // Em produção, apenas simular a operação
      return this.getProfiles().pipe(
        map(profiles => profiles[0])
      );
    }
    return this.http.patch<Profile>(`http://localhost:3000/profile/${profileId}`, {
      lists: [{ id: listId, gamesIds: [gameId] }]
    });
  }

  removeGameFromList(profileId: string, listId: string, gameId: string): Observable<Profile> {
    if (this.isProduction) {
      // Em produção, apenas simular a operação
      return this.getProfiles().pipe(
        map(profiles => profiles[0])
      );
    }
    return this.http.patch<Profile>(`http://localhost:3000/profile/${profileId}`, {
      lists: [{ id: listId, gamesIds: [gameId] }]
    });
  }

  moveGameBetweenLists(profileId: string, fromListId: string, toListId: string, gameId: string): Observable<Profile> {
    if (this.isProduction) {
      // Em produção, apenas simular a operação
      return this.getProfiles().pipe(
        map(profiles => profiles[0])
      );
    }
    return this.http.patch<Profile>(`http://localhost:3000/profile/${profileId}`, {
      lists: [
        { id: fromListId, gamesIds: [gameId] },
        { id: toListId, gamesIds: [gameId] }
      ]
    });
  }
}