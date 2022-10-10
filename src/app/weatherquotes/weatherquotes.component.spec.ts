import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherquotesComponent } from './weatherquotes.component';

describe('WeatherquotesComponent', () => {
  let component: WeatherquotesComponent;
  let fixture: ComponentFixture<WeatherquotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherquotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
