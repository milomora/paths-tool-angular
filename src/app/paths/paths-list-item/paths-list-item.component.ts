import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PathListItem } from '../../shared/types/paths-types';
import { PathService } from '../../shared/services/path.service';

@Component({
  selector: 'app-paths-list-item',
  standalone: true,
  imports: [RouterLink, MatIconModule, CommonModule],
  templateUrl: './paths-list-item.component.html',
  styleUrl: './paths-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PathsListItemComponent {
  private pathsService = inject(PathService);

  @Input({ required: true }) itemData!: PathListItem;

  formatDate(date: Date): string {
    return date.toLocaleDateString();
  }

  toggleFavorite(event: MouseEvent, slug: string) {
    event.preventDefault();
    event.stopPropagation();

    this.pathsService.toggleFavorite(this.isFavorite, slug);
  }

  get isFavorite(): boolean {
    return !!this.itemData.isFavorite;
  }
}
