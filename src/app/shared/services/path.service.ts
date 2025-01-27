import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PathListItem } from '../types/paths-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  private http = inject(HttpClient);

  private _favoriteList: string[] = [];

  // constructor() { }

  getPathsList(): Observable<PathListItem[]> {
    return this.http.get<PathListItem[]>('/mock/paths-list-mock.json');
  }

  toggleFavorite(isFavorite: boolean, slug: string) {
    if (isFavorite) {
      this.favoriteList = this.favoriteList.filter((item) => item !== slug);
    } else {
      this.favoriteList.push(slug);
    }
  }

  get favoriteList(): string[] {
    return this._favoriteList;
  }

  private set favoriteList(value: string[]) {
    this._favoriteList = value;
  }
}
