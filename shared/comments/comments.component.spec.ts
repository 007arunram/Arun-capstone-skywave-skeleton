import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentsComponent } from './comments.component';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let commentForm: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        AppModule,
        SharedModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test spec on should create method
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test spec on positive state of form
  it('has valid form when all fields are properly filled', () => {
    component.commentForm?.controls.name.setValue('arun');
    component.commentForm?.controls.rate.setValue('80');
    component.commentForm?.controls.email.setValue('arun@gmail.com');
    component.commentForm?.controls.review.setValue('Good');
    expect(component.commentForm.valid).toBeTruthy();
  });

  // test spec on negative state of form
  it('has invalid form when all fields are not properly filled', () => {
    component.commentForm?.controls.name.setValue('');
    component.commentForm?.controls.rate.setValue('342637590123');
    component.commentForm?.controls.email.setValue('arungmail.com');
    component.commentForm?.controls.review.setValue('');
    expect(component.commentForm.valid).toBeFalsy();
  });

  // call postReview method -- spyOn
  it('should call postReview -- all throug [TS]', () => {
    spyOn(component, 'postReview');
    component.postReview(commentForm);
    expect(component.postReview).toHaveBeenCalled();
  });

  // adding comments details -- positive test spec
  it('should add review details through postReview', (done: DoneFn) => {
    // enter the valid input values only then, the submit button will be enabled
    component.commentForm?.controls.name.setValue('arun');
    component.commentForm?.controls.rate.setValue('80');
    component.commentForm?.controls.email.setValue('arun@gmail.com');
    component.commentForm?.controls.review.setValue('Good');

    fixture.detectChanges(); // you detect the changes in HTML only then submit button will be enabled
    const formData = component.commentForm.value;
    spyOn(component, 'onCommentFormSubmit').and.callThrough();
    component.onCommentFormSubmit(formData);
    expect(component.onCommentFormSubmit).toHaveBeenCalled();

    const mockResponse = 'success';

    spyOn(component, 'postReview')
      .withArgs(formData)
      .and.returnValue(of(mockResponse));
    component.postReview(formData).subscribe({
      next: (res) => {
        console.log(res);
        expect(res).toEqual(mockResponse);
        done();
      },
      error: () => {
        console.log('SOME ERROR OCCURED.');
        done();
      },
    });
  });

  // test spec call on rating
  it('should call rating', () => {
    spyOn(component, 'rate').and.callThrough();

    const ratings = {
      title: 'Very Dissatisfied',
      icon: 'sentiment_very_dissatisfied',
      percentage: 20,
      selected: false,
    };

    component.rate(ratings);
    expect(component.rate).toHaveBeenCalledWith(ratings);
  });

  // negative code spec
  it('should return error when form data is not sent', () => {
    component.commentForm?.controls.name.setValue('');
    component.commentForm?.controls.rate.setValue('');
    component.commentForm?.controls.email.setValue('');
    component.commentForm?.controls.review.setValue('');

    fixture.detectChanges();

    const submitBtn = fixture.debugElement.query(
      By.css('.submitBtn')
    ).nativeElement;
    submitBtn.click();

    spyOn(component, 'postReview')
      .withArgs(component.commentForm.value)
      .and.throwError('Invalid Input');
    expect(function() {
      component.postReview(component.commentForm.value);
    }).toThrow(new Error('Invalid Input'));
  });

});
