import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PathListItem } from '../../shared/types/paths-types';

@Component({
  selector: 'app-paths-list-item',
  standalone: true,
  imports: [RouterLink, MatIconModule, CommonModule],
  templateUrl: './paths-list-item.component.html',
  styleUrl: './paths-list-item.component.scss',
})
export class PathsListItemComponent {
  @Input({ required: true }) itemData!: PathListItem;
  @Input({ required: true }) favoriteList!: string[];
  @Output() favoriteClick = new EventEmitter<{ isFavorite: boolean; slug: string }>();

  formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  isFavorite(slug: string): boolean {
    return this.favoriteList.includes(slug);
  }

  toggleFavorite(event: MouseEvent, slug: string) {
    event.preventDefault();
    event.stopPropagation();

    this.favoriteClick.emit({ isFavorite: this.isFavorite(slug), slug });
  }
}
