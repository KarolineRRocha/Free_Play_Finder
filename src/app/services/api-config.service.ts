import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  private apiBaseUrl: string;

  constructor() {
    // Verifica se está rodando localmente ou no GitHub Pages
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      // Ambiente local - usa JSON Server
      this.apiBaseUrl = 'http://localhost:3000';
    } else {
      // Ambiente de produção - usa API online
      this.apiBaseUrl = 'https://my-json-server.typicode.com/KarolineRRocha/Free_Play_Finder';
    }
  }

  getApiUrl(endpoint: string): string {
    return `${this.apiBaseUrl}/${endpoint}`;
  }

  getApiBaseUrl(): string {
    return this.apiBaseUrl;
  }
} 