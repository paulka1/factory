import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBoxPageComponent } from './mail-box-page.component';

describe('MailBoxPageComponent', () => {
  let component: MailBoxPageComponent;
  let fixture: ComponentFixture<MailBoxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailBoxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
