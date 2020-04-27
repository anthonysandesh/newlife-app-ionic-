import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinPage } from './bulletin.page';

describe('BulletinPage', () => {
  let component: BulletinPage;
  let fixture: ComponentFixture<BulletinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
