import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { MenuService } from "./menu.service";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Menu } from "./menu.model";

describe("MenuService", () => {
  let service: MenuService;
  let routerSpy: Router;
  let locationSpy: Location;

  // mock menu items
  const mockMenuItems = [
    new Menu(1, "NAV.HOME", "/", null, null, false, 0),
    new Menu(80, "NAV.ABOUT_US", "/about", null, null, false, 0),
    new Menu(70, "NAV.CONTACT", "/contact", null, null, false, 0),
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        MenuService,
        { provide: Router, useValue: routerSpy },
        { location: Location, useValue: locationSpy },
      ],
    });
    service = TestBed.inject(MenuService);
  });

  // setting up spy
  beforeEach(() => {
    service = new MenuService(locationSpy, routerSpy);
  });
  
  // test spec on should be created
  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  // sould return valuses by getHorizontalMenuItems method
  it("should return values by getHorizontalMenuItems method", () => {
    const menuItems = service.getHorizontalMenuItems();
    expect(menuItems).toEqual(mockMenuItems);
  });
});
