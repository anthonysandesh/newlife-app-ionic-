import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingPlanPage } from './reading-plan.page';

describe('ReadingPlanPage', () => {
  let component: ReadingPlanPage;
  let fixture: ComponentFixture<ReadingPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingPlanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
