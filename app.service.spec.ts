import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AppModule } from './app.module';

import { AppService } from './app.service';
import { AppSettings } from './app.settings';

describe('AppService', () => {
  let service: AppService;
  // set up spy
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let datePipe: DatePipe;
  let dialog: MatDialog;
  let appSettings: AppSettings;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    service = TestBed.inject(AppService);
  });

  // setting up spy
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new AppService(
      httpClientSpy,
      datePipe,
      dialog,
      appSettings,
      translateService
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test case on getmenuItems Method
  it('should return menu Items when called [HTTP SPY]', (done: DoneFn) => {
    const mockMenuItems = [
      {
        id: 1,
        name: 'Snack Set',
        description:
          'Butter, cream, honey, salty cottage cheese, white cheese.',
        price: 8.2,
        image: {
          small: 'assets/images/foods/breakfast/1/small.jpg',
          medium: 'assets/images/foods/breakfast/1/medium.jpg',
          big: 'assets/images/foods/breakfast/1/big.jpg',
        },
        discount: 0,
        ratingsCount: 4,
        ratingsValue: 350,
        availibilityCount: 5,
        cartCount: 0,
        weight: 160,
        isVegetarian: false,
        categoryId: 1,
      },
    ];

    httpClientSpy.get.and.returnValue(of(mockMenuItems));
    service.getMenuItems().subscribe({
      next: (res) => {
        expect(res).toEqual(mockMenuItems);
        done();
      },
      error: () => {
        console.log('SOME ERROR OCCURED');
        done();
      },
    });
  });

  // test case on getMenuItemById method
  it('should return MenuItemById by Id when called [HTTP SPY]', (done: DoneFn) => {
    const mockMenuItemById = [
      {
        id: 17,
        name: 'Chick Soup With Rice',
        description:
          'Chick, round rice, onion, carrot, cherry plums, turmeric.',
        price: 8.2,
        image: {
          small: 'assets/images/foods/soups/1/small.jpg',
          medium: 'assets/images/foods/soups/1/medium.jpg',
          big: 'assets/images/foods/soups/1/big.jpg',
        },
        discount: 10,
        ratingsCount: 4,
        ratingsValue: 480,
        availibilityCount: 8,
        cartCount: 0,
        weight: 130,
        isVegetarian: false,
        categoryId: 4,
      },
    ];

    httpClientSpy.get.and.returnValue(of(mockMenuItemById));
    service.getMenuItemById(17).subscribe({
      next: (res: any) => {
        expect(res).toEqual(mockMenuItemById);
        done();
      },
      error: () => {
        console.log('SOME ERROR OCCURED');
        done();
      },
    });
  });

  // test case on getSpecialMenuItems method
  it('should return sepcial menu Items when called [HTTP SPY]', (done: DoneFn) => {
    const mockSpecialMenuItems = [
      {
        id: 11,
        name: 'Special Eggplants Snack',
        description: 'Marinated eggplants, special sauce, greens.',
        price: 4.5,
        image: {
          small: 'assets/images/foods/appetizers/4/small.jpg',
          medium: 'assets/images/foods/appetizers/4/medium.jpg',
          big: 'assets/images/foods/appetizers/4/big.jpg',
        },
        discount: 0,
        ratingsCount: 3,
        ratingsValue: 280,
        availibilityCount: 8,
        cartCount: 0,
        weight: 120,
        isVegetarian: true,
        categoryId: 2,
      },
      {
        id: 17,
        name: 'Chick Soup With Rice',
        description:
          'Chick, round rice, onion, carrot, cherry plums, turmeric.',
        price: 8.2,
        image: {
          small: 'assets/images/foods/soups/1/small.jpg',
          medium: 'assets/images/foods/soups/1/medium.jpg',
          big: 'assets/images/foods/soups/1/big.jpg',
        },
        discount: 10,
        ratingsCount: 4,
        ratingsValue: 480,
        availibilityCount: 8,
        cartCount: 0,
        weight: 130,
        isVegetarian: false,
        categoryId: 4,
      },
    ];

    httpClientSpy.get.and.returnValue(of(mockSpecialMenuItems));
    service.getSpecialMenuItems().subscribe({
      next: (res) => {
        expect(res).toEqual(mockSpecialMenuItems);
        done();
      },
      error: () => {
        console.log('SOME ERROR OCCURED');
        done();
      },
    });
  });

  // test case on getCategories method
  it('should return categories when called [HTTP SPY]', (done: DoneFn) => {
    const mockCategories = [
      {
        id: 1,
        name: 'Breakfast',
        description: 'Breakfast category description',
      },
      {
        id: 2,
        name: 'Appetizers',
        description: 'Appetizers category description',
      },
    ];

    httpClientSpy.get.and.returnValue(of(mockCategories));
    service.getCategories().subscribe({
      next: (res) => {
        expect(res).toEqual(mockCategories);
        done();
      },
      error: () => {
        console.log('SOME ERROR OCCURED');
        done();
      },
    });
  });
});
