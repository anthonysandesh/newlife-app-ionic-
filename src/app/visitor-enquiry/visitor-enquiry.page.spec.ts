import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorEnquiryPage } from './visitor-enquiry.page';
import { ReactiveFormsModule } from '@angular/forms';

describe('VisitorEnquiryPage', () => {
  let component: VisitorEnquiryPage;
  let fixture: ComponentFixture<VisitorEnquiryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorEnquiryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorEnquiryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
