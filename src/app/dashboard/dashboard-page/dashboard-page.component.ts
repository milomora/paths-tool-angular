import { Component } from '@angular/core';
// import { filter, interval, map, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  private _name = 'Milo';
  // private myObserver = of('Value 1', 'Value 2', 'Value 3');
  // private myObserver = interval(1000);
  // private subscription?: Subscription;

  // ngOnInit(): void {
  //   this.subscription = this.myObserver.pipe(take(1)).subscribe({
  //     next: (data) => console.log('NEXT', data),
  //     error: (error) => console.error(error),
  //     complete: () => console.log('COMPLETE'),
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.subscription?.unsubscribe();
  // }

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
