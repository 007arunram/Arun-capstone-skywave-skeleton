import { Component, OnInit } from '@angular/core';
import { AppSettings, Settings } from 'src/app/app.settings';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  // Set the properties for component then use it in template
  public aboutBgImage = 'assets/images/others/about.jpg';
  public aboutContentLeftImage = 'assets/images/others/about-1.jpg';
  public aboutContentRightImage = 'assets/images/others/about-2.jpg';
  public settings: Settings;

  constructor(public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {}
}
