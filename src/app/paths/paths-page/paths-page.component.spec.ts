import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathsPageComponent } from './paths-page.component';

describe('PathsPageComponent', () => {
  let component: PathsPageComponent;
  let fixture: ComponentFixture<PathsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
