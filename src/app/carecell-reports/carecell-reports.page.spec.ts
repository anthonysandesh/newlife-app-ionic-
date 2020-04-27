import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarecellReportsPage } from './carecell-reports.page';
import { ReactiveFormsModule } from '@angular/forms';

describe('CarecellReportsPage', () => {
  let component: CarecellReportsPage;
  let fixture: ComponentFixture<CarecellReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarecellReportsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarecellReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
