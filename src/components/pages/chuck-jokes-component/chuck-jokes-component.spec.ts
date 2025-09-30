import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckJokesComponent } from './chuck-jokes-component';

describe('ChuckJokesComponent', () => {
  let component: ChuckJokesComponent;
  let fixture: ComponentFixture<ChuckJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChuckJokesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuckJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
