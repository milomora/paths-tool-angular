import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paths-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './paths-page.component.html',
  styleUrl: './paths-page.component.scss',
})
export class PathsPageComponent {}
