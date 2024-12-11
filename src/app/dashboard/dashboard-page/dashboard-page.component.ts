import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  private _name = 'Milo';

  sayHello() {
    this.name = 'Milo Mora';
    console.log('HELLO', this.name);
  }

  get name(): string {
    return this._name + '!';
  }

  set name(value: string) {
    if (value !== '') this._name = value;
  }
}
