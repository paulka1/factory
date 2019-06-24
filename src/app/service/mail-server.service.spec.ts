import { TestBed } from '@angular/core/testing';

import { MailServerService } from './mail-server.service';

describe('MailServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailServerService = TestBed.get(MailServerService);
    expect(service).toBeTruthy();
  });
});
