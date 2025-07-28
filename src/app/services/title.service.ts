import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private baseTitle = 'FreePlayFinder';

  constructor(private titleService: Title) { }

  setTitle(pageTitle?: string) {
    if (pageTitle) {
      this.titleService.setTitle(`${this.baseTitle} - ${pageTitle}`);
    } else {
      this.titleService.setTitle(this.baseTitle);
    }
  }

  setBaseTitle() {
    this.titleService.setTitle(this.baseTitle);
  }
}
