import { TestBed } from '@angular/core/testing';

import { VideojueosService } from './videojueos.service';

describe('VideojueosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideojueosService = TestBed.get(VideojueosService);
    expect(service).toBeTruthy();
  });
});
