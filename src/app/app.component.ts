import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public schoolMenuList = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
      color: 'navy'
    },
    {
      title: 'Notice Board',
      url: '/list',
      icon: 'list',
      color: 'blue'
    },
    {
      title: 'Fill Attendance',
      url: '/list',
      icon: 'list',
      color: '#a52a2ac4'
    },
    {
      title: 'My Attandance',
      url: '/list',
      icon: 'list',
      color: 'green'
    },
    {
      title: 'Home Work',
      url: '/list',
      icon: 'document',
      color: 'purple'
    },
    {
      title: 'Daily Report',
      url: '/list',
      icon: 'albums',
      color: 'orange'
    },
    {
      title: 'Time Table',
      url: '/list',
      icon: 'clock',
      color: 'deeppink'
    },
    {
      title: 'View Student',
      url: '/list',
      icon: 'list',
      color: 'red'
    },
    {
      title: 'Material Upload',
      url: '/list',
      icon: 'list',
      color: 'darkslateblue'
    },
    {
      title: 'Material Notice',
      url: '/list',
      icon: 'list',
      color: 'yellow'
    },
    {
      title: 'Remarks',
      url: '/list',
      icon: 'list',
      color: 'maroon'
    },
    {
      title: 'Send Notification',
      url: '/list',
      icon: 'list',
      color: 'darkslategrey'
    },
    {
      title: 'Profile',
      url: '/list',
      icon: 'list',
      color: 'blueviolet'
    },
    {
      title: 'Notification',
      url: '/list',
      icon: 'list',
      color: 'cadetblue'
    },
    {
      title: 'Change Password',
      url: '/list',
      icon: 'list',
      color: 'coral'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
