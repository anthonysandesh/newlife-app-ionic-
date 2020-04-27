import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberServicesPage } from './member-services.page';

describe('MemberServicesPage', () => {
  let component: MemberServicesPage;
  let fixture: ComponentFixture<MemberServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberServicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
