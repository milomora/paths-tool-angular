import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PathItemResponse, PathListData, PathListItem, PathListResponse } from '../types/paths-types';
import { BehaviorSubject, filter, lastValueFrom, map, Observable, take } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  private pathsData = new BehaviorSubject<PathListItem[] | null>(null);

  constructor() {
    this.updatePaths();
  }

  getPathsList(): Observable<PathListItem[]> {
    return this.http
      .get<PathListResponse>(environment.apiUrl + '/api/paths')
      .pipe(map((response) => this.mapPathListResponseToData(response).data));
  }

  // ToDo: Map PathItemResponse data to PathItemData type
  getPathItemData(slug: string): Observable<PathItemResponse> {
    return this.http.get<PathItemResponse>(
      environment.apiUrl + '/api/paths/slug/' + slug + '?populate[topics][populate][subtopics][populate]=links',
    );
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

  mapPathListResponseToData(source: PathListResponse): PathListData {
    return {
      data: source.data.map((item) => ({
        id: item.id,
        logo: item.attributes.logo,
        name: item.attributes.name,
        description: item.attributes.description,
        author: item.attributes.author,
        date: new Date(item.attributes.updatedAt),
        slug: item.attributes.slug,
      })),
      meta: source.meta,
    };
  }

  get paths$(): Observable<PathListItem[]> {
    return this.pathsData.asObservable().pipe(filter((data) => data !== null));
  }

  get favoritePaths$(): Observable<PathListItem[]> {
    return this.paths$.pipe(map((list) => list.filter((item) => item.isFavorite)));
  }
}
