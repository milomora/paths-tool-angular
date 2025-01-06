import { Component, OnInit } from '@angular/core';
import { PathListItem } from '../../shared/types/paths-types';
import { PathsListComponent } from '../paths-list/paths-list.component';

@Component({
  selector: 'app-paths-page',
  standalone: true,
  imports: [PathsListComponent],
  templateUrl: './paths-page.component.html',
  styleUrl: './paths-page.component.scss',
})
export class PathsPageComponent implements OnInit {
  pathsData: PathListItem[];
  favoriteList: string[] = [];

  constructor() {
    this.pathsData = [];
  }

  ngOnInit(): void {
    fetch('/mock/paths-list-mock.json')
      .then((data) => data.json())
      .then((data: PathListItem[]) => (this.pathsData = data));
  }

  toggleFavorite(isFavorite: boolean, slug: string) {
    if (isFavorite) {
      this.favoriteList = this.favoriteList.filter((item) => item !== slug);
    } else {
      this.favoriteList.push(slug);
    }
  }

  get favoritePaths(): PathListItem[] {
    return this.pathsData.filter((item) => this.favoriteList.includes(item.slug));
  }
}
