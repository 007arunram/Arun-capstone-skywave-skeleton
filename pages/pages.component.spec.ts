import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { PagesComponent } from './pages.component';
import { DatePipe } from '@angular/common';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
} from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      imports: [AppModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        AppSettings,
        AppService,
        DatePipe,
        MatDialog,
        Overlay,
        MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
        TranslateService,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test spec create component
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test spec call on ngOnInit
  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

    // test spec call on changeTheme
  it('should call changeTheme', () => {
    spyOn(component, 'changeTheme').and.callThrough();
    component.changeTheme('Blue');
    expect(component.changeTheme).toHaveBeenCalled();
  });

      // test spec call on chooseHeaderType
  it('should call chooseHeaderType', () => {
    spyOn(component, 'chooseHeaderType').and.callThrough();
    component.chooseHeaderType();
    expect(component.chooseHeaderType).toHaveBeenCalled();
  });

        // test spec call on getCategories
  it('should call getCategories', () => {
    spyOn(component, 'getCategories').and.callThrough();
    component.getCategories();
    expect(component.getCategories).toHaveBeenCalled();
  });

  // test spec call on ngAfterViewInit
  it('should call ngAfterViewInit', () => {
    spyOn(component, 'ngAfterViewInit').and.callThrough();
    component.ngAfterViewInit();
    expect(component.ngAfterViewInit).toHaveBeenCalled();
  });

  // test spec call on scrollToTop
  it('should call scrollToTop', () => {
    spyOn(component, 'scrollToTop').and.callThrough();
    component.showBackToTop = true;
    fixture.detectChanges();
    const backToTop = fixture.debugElement.query(By.css('.back-to-top'));
    backToTop.nativeElement.dispatchEvent(new Event('scrolldown'), backToTop);
    component.scrollToTop();
    fixture.detectChanges();
    expect(component.scrollToTop).toHaveBeenCalled();
    expect(window.pageYOffset).toBe(0);
  });

    // test spec call on onWindowScroll
  it('should call onWindowScroll', () => {
    spyOn(component, 'onWindowScroll');
    component.showBackToTop = true;
    fixture.detectChanges();
    const backToTop = fixture.debugElement.query(By.css('.back-to-top'));
    backToTop.nativeElement.dispatchEvent(new Event('scrolldown'), backToTop);
    fixture.detectChanges();
    component.onWindowScroll();
    fixture.detectChanges();
    expect(component.onWindowScroll).toHaveBeenCalled();
  });

});
