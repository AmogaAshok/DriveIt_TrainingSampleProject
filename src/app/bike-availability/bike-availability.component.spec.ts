import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeAvailabilityComponent } from './bike-availability.component';

describe('BikeAvailabilityComponent', () => {
  let component: BikeAvailabilityComponent;
  let fixture: ComponentFixture<BikeAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
