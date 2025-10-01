import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFoodComponent } from './open-food-component';

describe('OpenFoodComponent', () => {
  let component: OpenFoodComponent;
  let fixture: ComponentFixture<OpenFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
