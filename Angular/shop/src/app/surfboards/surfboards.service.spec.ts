import { TestBed } from '@angular/core/testing';

import { SurfboardsService } from './surfboards.service';

describe('SurfboardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurfboardsService = TestBed.get(SurfboardsService);
    expect(service).toBeTruthy();
  });
});
