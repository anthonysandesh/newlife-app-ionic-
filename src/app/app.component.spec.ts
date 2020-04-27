import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
      ],
      imports: [ RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  it('should have menu labels', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(18);
    expect(menuItems[0].textContent).toContain('MemberServices');
    expect(menuItems[1].textContent).toContain('CarecellDetails');
    expect(menuItems[2].textContent).toContain('CarecellReports');
    expect(menuItems[3].textContent).toContain('Carecells');
    expect(menuItems[4].textContent).toContain('Home');
    expect(menuItems[5].textContent).toContain('Login');
    expect(menuItems[6].textContent).toContain('Events');
    expect(menuItems[7].textContent).toContain('Feedback Form');
    // expect(menuItems[8].textContent).toContain('Live Stream');
    expect(menuItems[9].textContent).toContain('Membership Form');
    expect(menuItems[10].textContent).toContain('SMS');
    expect(menuItems[11].textContent).toContain('Amin Card');
    expect(menuItems[12].textContent).toContain('Subscribe');
    expect(menuItems[13].textContent).toContain('Video Archives');
    expect(menuItems[14].textContent).toContain('Visitor Enquiry');
    expect(menuItems[15].textContent).toContain('Bulletin');
    expect(menuItems[16].textContent).toContain('Lets Go Church');
    expect(menuItems[17].textContent).toContain('Reading Plan');
  });

  it('should have urls', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(18);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/member-services');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/carecell-details');
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual('/carecell-reports');
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual('/carecells');
    expect(menuItems[4].getAttribute('ng-reflect-router-link')).toEqual('/home');
    expect(menuItems[5].getAttribute('ng-reflect-router-link')).toEqual('/login');
    expect(menuItems[6].getAttribute('ng-reflect-router-link')).toEqual('/events');
    expect(menuItems[7].getAttribute('ng-reflect-router-link')).toEqual('/feedback-form');
    // expect(menuItems[8].getAttribute('ng-reflect-router-link')).toEqual('/live-stream');
    expect(menuItems[9].getAttribute('ng-reflect-router-link')).toEqual('/membership-form');
    expect(menuItems[10].getAttribute('ng-reflect-router-link')).toEqual('/sms');
    expect(menuItems[11].getAttribute('ng-reflect-router-link')).toEqual('/amin-card');
    expect(menuItems[12].getAttribute('ng-reflect-router-link')).toEqual('/subscribe');
    expect(menuItems[13].getAttribute('ng-reflect-router-link')).toEqual('/video-archives');
    expect(menuItems[14].getAttribute('ng-reflect-router-link')).toEqual('/visitor-enquiry');
    expect(menuItems[15].getAttribute('ng-reflect-router-link')).toEqual('/bulletin');
    expect(menuItems[16].getAttribute('ng-reflect-router-link')).toEqual('/lets-go-church');
    expect(menuItems[17].getAttribute('ng-reflect-router-link')).toEqual('/reading-plan');

  });

});
