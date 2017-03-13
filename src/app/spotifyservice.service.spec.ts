import { TestBed, inject } from '@angular/core/testing';

import { SpotifyserviceService } from './spotifyservice.service';

describe('SpotifyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyserviceService]
    });
  });

  it('should ...', inject([SpotifyserviceService], (service: SpotifyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
