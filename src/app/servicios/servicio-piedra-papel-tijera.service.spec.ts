import { TestBed, inject } from '@angular/core/testing';

import { ServicioPiedraPapelTijeraService } from './servicio-piedra-papel-tijera.service';

describe('ServicioPiedraPapelTijeraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioPiedraPapelTijeraService]
    });
  });

  it('should be created', inject([ServicioPiedraPapelTijeraService], (service: ServicioPiedraPapelTijeraService) => {
    expect(service).toBeTruthy();
  }));
});
