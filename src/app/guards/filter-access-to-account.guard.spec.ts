import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { filterAccessToAccountGuard } from './filter-access-to-account.guard';

describe('filterAccessToAccountGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => filterAccessToAccountGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
