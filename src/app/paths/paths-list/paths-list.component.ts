import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PathListItem } from '../../shared/types/paths-types';
import { PathsListItemComponent } from '../paths-list-item/paths-list-item.component';

@Component({
  selector: 'app-paths-list',
  standalone: true,
  imports: [PathsListItemComponent],
  templateUrl: './paths-list.component.html',
  styleUrl: './paths-list.component.scss',
})
export class PathsListComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) pathsData!: PathListItem[];
  @Input({ required: true }) favoriteList!: string[];
  @Output() favoriteClick = new EventEmitter<{ isFavorite: boolean; slug: string }>();
}
