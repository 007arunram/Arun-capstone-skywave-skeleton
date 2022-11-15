import { CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let service: AppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [ReactiveFormsModule, AppModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [AppSettings]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AppService);

    fixture.detectChanges();
  });

  // test spec on should create method
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test spec on positive state of the form
  it('has valid form when all fields are properely filled', () => {
    component.contactForm?.controls.name.setValue('arun');
    component.contactForm?.controls.email.setValue('arun@r.co');
    component.contactForm?.controls.phone.setValue('241231');
    component.contactForm?.controls.message.setValue('checking on contact form');

    expect(component.contactForm.valid).toBeTrue();
  });

  // test spec on negative state of the form
  it('has invalid form if any one of the form fields are not properly filled', () => {
    component.contactForm?.controls.name.setValue('');
    component.contactForm?.controls.email.setValue('arun@c.co');
    component.contactForm?.controls.phone.setValue('');
    component.contactForm?.controls.message.setValue('checking on contact form');

    expect(component.contactForm.invalid).toBeTrue();
  });

  //  spy on call postMessage Method
  it(' shoud call postMessage -- all through [TS]', () => {
    spyOn(service, 'postMessage');
    service.postMessage(Input);
    expect(service.postMessage).toHaveBeenCalled();
  });

   // adding contact details -- positive test spec
  it('should add contact details through AppService', (done: DoneFn) => {
    component.contactForm?.controls.name.setValue('kumar');
    component.contactForm?.controls.phone.setValue('9876543210');
    component.contactForm?.controls.email.setValue('ar@r.com');
    component.contactForm?.controls.message.setValue('checking on contact form');
    fixture.detectChanges(); // you detect the changes in HTML only then submit button will be enabled
    const formData = component.contactForm.value;

    spyOn(component, 'onContactFormSubmit').and.callThrough();
    component.onContactFormSubmit();
    expect(component.onContactFormSubmit).toHaveBeenCalled();

    const mockResponse = 'success';

    spyOn(component.appService, 'postMessage')
      .withArgs(formData)
      .and.returnValue(of(mockResponse));
    component.appService.postMessage(formData).subscribe({
      next: (res) => {
        expect(res).toEqual(mockResponse);
        done();
      },
      error: () => {
        console.log('SOME ERROR OCCURED');
        done();
      }
    });
  });

  // negative code spec
  it('should return error when form data is not sent', () => {
    component.contactForm?.controls.name.setValue(''),
    component.contactForm?.controls.phone.setValue(''),
    component.contactForm?.controls.email.setValue('');

    fixture.detectChanges();

    const submitBtn = fixture.debugElement.query(
      By.css('.submitBtn')
    ).nativeElement;
    submitBtn.click();

    spyOn(component.appService, 'postMessage')
      .withArgs(component.contactForm.value)
      .and.throwError('Invalid Input');
    expect(function() {
      component.appService.postMessage(component.contactForm.value);
    }).toThrow(new Error('Invalid Input'));
  });

});
