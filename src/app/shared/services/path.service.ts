import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PathListItem } from '../types/paths-types';
import { BehaviorSubject, filter, lastValueFrom, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  private http = inject(HttpClient);

  private pathsData = new BehaviorSubject<PathListItem[] | null>(null);

  constructor() {
    this.updatePaths();
  }

  getPathsList(): Observable<PathListItem[]> {
    return this.http.get<PathListItem[]>('/mock/paths-list-mock.json');
  }

  async updatePaths() {
    return lastValueFrom(this.getPathsList()).then((data) => {
      this.pathsData.next(data);

      return data;
    });
  }

  toggleFavorite(isFavorite: boolean, slug: string) {
    // const currentData = this.pathsData.getValue();
    // const itemFound = currentData?.find((item) => item.slug === slug);

    // if (!currentData || !itemFound) return;

    // itemFound.isFavorite = !isFavorite;

    // this.pathsData.next(currentData);

    this.paths$.pipe(take(1)).subscribe((data) => {
      this.pathsData.next(
        data.map((item) => ({ ...item, isFavorite: item.slug === slug ? !isFavorite : item.isFavorite })),
      );
    });
  }

  get paths$(): Observable<PathListItem[]> {
    return this.pathsData.asObservable().pipe(filter((data) => data !== null));
  }

  get favoritePaths$(): Observable<PathListItem[]> {
    return this.paths$.pipe(map((list) => list.filter((item) => item.isFavorite)));
  }
}
