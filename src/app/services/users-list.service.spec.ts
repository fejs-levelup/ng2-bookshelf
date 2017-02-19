/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersListService } from './users-list.service';

describe('UsersListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersListService]
    });
  });

  it('should ...', inject([UsersListService], (service: UsersListService) => {
    expect(service).toBeTruthy();
  }));
});
