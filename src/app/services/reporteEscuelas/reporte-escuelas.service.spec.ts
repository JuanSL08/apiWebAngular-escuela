import { TestBed } from '@angular/core/testing';

import { ReporteEscuelasService } from './reporte-escuelas.service';

describe('ReporteEscuelasService', () => {
  let service: ReporteEscuelasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteEscuelasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
