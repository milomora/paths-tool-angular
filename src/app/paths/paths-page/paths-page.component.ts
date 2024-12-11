import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PathListItem } from '../../shared/types/paths-types';
import { MatIconModule } from '@angular/material/icon';
import PATHS_MOCK_DATA from '../../../mock/paths-list-mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paths-page',
  standalone: true,
  imports: [RouterLink, MatIconModule, CommonModule],
  templateUrl: './paths-page.component.html',
  styleUrl: './paths-page.component.scss',
})
export class PathsPageComponent {
  pathsData: PathListItem[] = PATHS_MOCK_DATA;
  favoriteList: string[] = [];

  formatDate(date: Date): string {
    return date.toLocaleDateString();
  }

  isFavorite(slug: string): boolean {
    return this.favoriteList.includes(slug);
  }

  get favoritePaths(): PathListItem[] {
    return this.pathsData.filter((item) => this.favoriteList.includes(item.slug));
  }

  toggleFavorite(event: MouseEvent, slug: string) {
    event.preventDefault();
    event.stopPropagation();

    if (this.isFavorite(slug)) {
      this.favoriteList = this.favoriteList.filter((item) => item !== slug);
    } else {
      this.favoriteList.push(slug);
    }
  }
}
