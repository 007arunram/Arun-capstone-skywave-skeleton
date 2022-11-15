import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemsCarouselComponent } from './menu-items-carousel.component';


describe('MenuItemsCarouselComponent', () => {
  let component: MenuItemsCarouselComponent;
  let fixture: ComponentFixture<MenuItemsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MenuItemsCarouselComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test spec on should create method
  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
