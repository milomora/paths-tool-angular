import { Routes } from '@angular/router';
import { PathsPageComponent } from './paths-page/paths-page.component';
import { PathItemComponent } from './path-item/path-item.component';

export const routes: Routes = [
  { path: '', component: PathsPageComponent },
  { path: ':id', component: PathItemComponent },
];
