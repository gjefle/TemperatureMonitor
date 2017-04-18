import { TestBed, inject } from '@angular/core/testing';

import { DataListenerService } from './data-listener.service';

describe('DataListenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataListenerService]
    });
  });

  it('should ...', inject([DataListenerService], (service: DataListenerService) => {
    expect(service).toBeTruthy();
  }));
});
