import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarecellsPage } from './carecells.page';

describe('CarecellsPage', () => {
  let component: CarecellsPage;
  let fixture: ComponentFixture<CarecellsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarecellsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarecellsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
