import { Component, OnInit } from '@angular/core';
import { Settings, AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';
import { MenuItem } from 'src/app/app.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public slides = [];
  public specialMenuItems: Array<MenuItem> = [];

  // Set the properties for component then use it in template
  homeBackgroundImage = 'assets/images/others/homepage.jpg';
  homeTitle = 'Welcome to SkyWave Restaurant';
  homeDesc = 'Healthy, Authentic & Safe Food';

  aboutImage: any = 'assets/images/others/about-us.jpg';

  public settings: Settings;
  constructor(public appSettings: AppSettings, public appService: AppService, public router: Router) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.getSpecialMenuItems();
  }

  // get the special menu items through calling the app service TS
  public getSpecialMenuItems(): void {
    this.appService.getSpecialMenuItems().subscribe((menuItems) => {
      this.specialMenuItems = menuItems;
    });
  }
}
