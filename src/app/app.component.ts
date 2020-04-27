import { Component, OnInit, OnDestroy } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { ConnectionService } from 'ng-connection-service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Bulletin',
      url: '/bulletin',
      icon: 'alarm'
    },
    {
      title: 'Videos',
      url: '/video-archives',
      icon: 'play'
    },
    {
      title: 'Events',
      url: '/events',
      icon: 'calendar'
    },
    {
      title: 'Reading plan',
      url: '/reading-plan',
      icon: 'book'
    },
    {
      title: 'Givings',
      url: '/givings',
      icon: 'book'
    },
    {
      title: 'Lets Go Church',
      url: '/lets-go-church',
      // url: 'http://onelink.to/ez7k5e',
      icon: 'car'
    },
    {
      title: 'Feedback Form',
      url: '/feedback-form',
      icon: 'paper'
    },
    {
      title: 'Carecell List',
      url: '/carecells',
      icon: 'clipboard'
    },
    {
      title: 'Carecell Reports',
      url: '/carecell-reports',
      icon: 'stats'
    },
    {
      title: 'Member Services',
      url: '/member-services',
      icon: 'paper'
    },
    {
      title: 'Amin Card',
      url: '/amin-card',
      icon: 'card'
    },
    {
      title: 'Live Stream',
      url: '/live-stream',
      icon: 'videocam'
    },
    {
      title: 'Membership Form',
      url: '/membership-form',
      icon: 'paper'
    },
    {
      title: 'SMS',
      url: '/sms',
      icon: 'text'
    },
    {
      title: 'Subscribe',
      url: '/subscribe',
      icon: 'text'
    },
    {
      title: 'Visitor Enquiry',
      url: '/visitor-enquiry',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
  ];
  title = 'internet-connection-check';
status = 'ONLINE'; //initializing as online by default
isConnected = true;

  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private connectionService:ConnectionService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if(this.isConnected){
      this.status = "Back to ONLINE";
      } else {
      this.status = "No Internet Connectivity"
      }
      alert(this.status);
      });
  }

  

 
}

