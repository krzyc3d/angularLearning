import { TestBed } from '@angular/core/testing';

import { LoginUserFormService } from './login-user-form.service';

describe('LoginUserFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginUserFormService = TestBed.get(LoginUserFormService);
    expect(service).toBeTruthy();
  });
});
