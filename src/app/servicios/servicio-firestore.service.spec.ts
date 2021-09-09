import { TestBed } from '@angular/core/testing';

import { ServicioFirestoreService } from './servicio-firestore.service';

describe('ServicioFirestoreService', () => {
  let service: ServicioFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
