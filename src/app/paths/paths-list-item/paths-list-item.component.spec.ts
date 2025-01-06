import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathsListItemComponent } from './paths-list-item.component';

describe('PathsListItemComponent', () => {
  let component: PathsListItemComponent;
  let fixture: ComponentFixture<PathsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathsListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
