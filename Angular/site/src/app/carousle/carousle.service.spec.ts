import { TestBed } from '@angular/core/testing';

import { CarousleService } from './carousle.service';

describe('CarousleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarousleService = TestBed.get(CarousleService);
    expect(service).toBeTruthy();
  });
});
