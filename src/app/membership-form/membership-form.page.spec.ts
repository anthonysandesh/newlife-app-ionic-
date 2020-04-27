import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipFormPage } from './membership-form.page';
import { ReactiveFormsModule } from '@angular/forms'; //RAGHAVAN: This needs to be added otherwise there will be an error

describe('MembershipFormPage', () => {
  let component: MembershipFormPage;
  let fixture: ComponentFixture<MembershipFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
