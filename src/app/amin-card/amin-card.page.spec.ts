import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AminCardPage } from './amin-card.page';

describe('AminCardPage', () => {
  let component: AminCardPage;
  let fixture: ComponentFixture<AminCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AminCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AminCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
