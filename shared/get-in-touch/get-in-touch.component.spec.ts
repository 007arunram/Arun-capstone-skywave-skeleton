import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetInTouchComponent } from './get-in-touch.component';

describe('GetInTouchComponent', () => {
  let component: GetInTouchComponent;
  let fixture: ComponentFixture<GetInTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetInTouchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test spec on should create method
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
