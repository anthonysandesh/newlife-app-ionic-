import { TestBed } from '@angular/core/testing';

import { UceventsService } from './ucevents.service';

describe('UceventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UceventsService = TestBed.get(UceventsService);
    expect(service).toBeTruthy();
  });
});
