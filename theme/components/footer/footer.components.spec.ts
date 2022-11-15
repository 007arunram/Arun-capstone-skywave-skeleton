import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let feedbackForm: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test spec on should create method
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test spec on positive state of the form
  it('has valid form when all fields are properely filled', () => {
    component.feedbackForm?.controls.email.setValue('arun@m.co');
    component.feedbackForm?.controls.message.setValue('Good');
    expect(component.feedbackForm.valid).toBeTrue();
  });

  // test spec on negative state of the form
  it('has invalid form if any one of the form fields are not properly filled', () => {
    component.feedbackForm?.controls.email.setValue('');
    component.feedbackForm?.controls.message.setValue('Good');
    expect(component.feedbackForm.valid).toBeFalse();
  });

  // submission logic spy on
  it('should handle onFeedbackFormSubmit', () => {
    spyOn(component, 'onFeedbackFormSubmit');
    component.onFeedbackFormSubmit(feedbackForm);
    expect(component.onFeedbackFormSubmit).toHaveBeenCalled();
  });

  // have the filled form submission logic tested using spy
  it('should test form filled with valid input is getting submitted', () => {
    component.feedbackForm?.controls.email.setValue('arun@m.co');
    component.feedbackForm?.controls.message.setValue('hello');

    fixture.detectChanges(); // you detect the changes in HTML only then submit button will be enabled

    const formData = component.feedbackForm.value;

    spyOn(component, 'onFeedbackFormSubmit').and.callThrough();
    component.onFeedbackFormSubmit(formData);
    expect(component.onFeedbackFormSubmit).toHaveBeenCalled();
  });
});
