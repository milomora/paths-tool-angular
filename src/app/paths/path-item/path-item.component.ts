import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathService } from '../../shared/services/path.service';
import { PathItemData } from '../../shared/types/paths-types';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-path-item',
  standalone: true,
  imports: [CommonModule, MatProgressSpinner],
  templateUrl: './path-item.component.html',
  styleUrl: './path-item.component.scss',
})
export class PathItemComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pathService = inject(PathService);

  pathData?: PathItemData;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('id');
    if (!slug) return this.navigateToPaths();

    this.pathService.getPathItemData(slug).subscribe({
      next: (data) => (this.pathData = data),
      error: () => this.navigateToPaths(),
    });
  }

  navigateToPaths() {
    this.router.navigate(['/paths']);
  }
}
