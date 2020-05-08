import { TestBed } from '@angular/core/testing';

import { NewsAppService } from './news-app.service';

describe('NewsAppService', () => {
  let service: NewsAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
