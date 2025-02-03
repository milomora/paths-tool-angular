import { Component, inject } from '@angular/core';
import { PathsListComponent } from '../paths-list/paths-list.component';
import { PathService } from '../../shared/services/path.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paths-page',
  standalone: true,
  imports: [PathsListComponent, CommonModule],
  templateUrl: './paths-page.component.html',
  styleUrl: './paths-page.component.scss',
})
export class PathsPageComponent {
  private pathsService = inject(PathService);

  // constructor() {}

  get paths$() {
    return this.pathsService.paths$;
  }

  get favoritePaths$() {
    return this.pathsService.favoritePaths$;
  }
}
