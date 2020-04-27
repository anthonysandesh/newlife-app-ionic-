import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingsPage } from './givings.page';
import { ReactiveFormsModule } from '@angular/forms';

describe('GivingsPage', () => {
  let component: GivingsPage;
  let fixture: ComponentFixture<GivingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
