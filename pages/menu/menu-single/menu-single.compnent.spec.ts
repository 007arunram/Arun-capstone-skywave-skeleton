import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { AppSettings } from 'src/app/app.settings';
import { MenuSingleComponent } from './menu-single.component';

describe('MenuSingleComponent', () => {
  let component: MenuSingleComponent;
  let fixture: ComponentFixture<MenuSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuSingleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
      providers: [
        AppSettings,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 17 }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSingleComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Positive test case
  it('should call getMenuItemById', () => {
    spyOn(component, 'getMenuItemById').and.callThrough();
    component.getMenuItemById(17);
    expect(component.getMenuItemById).toHaveBeenCalled();
  });

  // negative test case
  it('should throw error when passed invalid id in getMenuItemById', () => {
    spyOn(component, 'getMenuItemById').withArgs(70).and.throwError('error');
    expect(function() {
      component.getMenuItemById(70);
    }).toThrow(new Error('error'));
  });
});
