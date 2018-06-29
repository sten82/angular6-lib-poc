import { TestBed, inject } from '@angular/core/testing';

import { ExampleLibAService } from './example-lib-a.service';

describe('ExampleLibAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleLibAService]
    });
  });

  it('should be created', inject([ExampleLibAService], (service: ExampleLibAService) => {
    expect(service).toBeTruthy();
  }));
});
