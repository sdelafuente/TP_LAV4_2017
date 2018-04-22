import { TestBed, inject } from '@angular/core/testing';

import { ServicioAritmeticaService } from './servicio-aritmetica.service';

describe('ServicioAritmeticaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioAritmeticaService]
    });
  });

  it('should be created', inject([ServicioAritmeticaService], (service: ServicioAritmeticaService) => {
    expect(service).toBeTruthy();
  }));
});
