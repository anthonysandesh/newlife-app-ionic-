import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpdialogPage } from './otpdialog.page';

describe('OtpdialogPage', () => {
  let component: OtpdialogPage;
  let fixture: ComponentFixture<OtpdialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpdialogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpdialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
