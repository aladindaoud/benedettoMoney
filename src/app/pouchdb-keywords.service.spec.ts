import { TestBed } from '@angular/core/testing';

import { PouchdbKeywordsService } from './pouchdb-keywords.service';

describe('PouchdbKeywordsService', () => {
  let service: PouchdbKeywordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PouchdbKeywordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
