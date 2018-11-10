import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPVerifyPage } from './otpverify.page';

describe('OTPVerifyPage', () => {
  let component: OTPVerifyPage;
  let fixture: ComponentFixture<OTPVerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OTPVerifyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OTPVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
