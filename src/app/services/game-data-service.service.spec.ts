import { TestBed, inject } from '@angular/core/testing';

import { GameDataServiceService } from './game-data-service.service';

describe('GameDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameDataServiceService]
    });
  });

  it('should ...', inject([GameDataServiceService], (service: GameDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
