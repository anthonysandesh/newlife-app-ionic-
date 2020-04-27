import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoArchivesPage } from './video-archives.page';

describe('VideoArchivesPage', () => {
  let component: VideoArchivesPage;
  let fixture: ComponentFixture<VideoArchivesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoArchivesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoArchivesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
