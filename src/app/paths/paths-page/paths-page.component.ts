import { Component, inject, OnInit } from '@angular/core';
import { PathListItem } from '../../shared/types/paths-types';
import { PathsListComponent } from '../paths-list/paths-list.component';
import { PathService } from '../../shared/services/path.service';

@Component({
  selector: 'app-paths-page',
  standalone: true,
  imports: [PathsListComponent],
  templateUrl: './paths-page.component.html',
  styleUrl: './paths-page.component.scss',
})
export class PathsPageComponent implements OnInit {
  private pathsService = inject(PathService);

  pathsData: PathListItem[];

  constructor() {
    this.pathsData = [];
  }

  ngOnInit(): void {
    this.pathsService.getPathsList().subscribe((data) => (this.pathsData = data));
  }

  get favoritePaths(): PathListItem[] {
    return this.pathsData.filter((item) => this.favoriteList.includes(item.slug));
  }

  get favoriteList(): string[] {
    return this.pathsService.favoriteList;
  }
}
