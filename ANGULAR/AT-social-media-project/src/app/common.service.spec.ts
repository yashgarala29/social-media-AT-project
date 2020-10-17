import { TestBed } from '@angular/core/testing';

import { common } from './common.service';

describe('common', () => {
  let service: common;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(common);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
