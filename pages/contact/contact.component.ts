import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { AppSettings, Settings } from 'src/app/app.settings';
import { emailValidator } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  // Have form tag equivalent in TS
  public contactForm!: FormGroup;
  // Set the properties for component then use it in template
  public contactBgImage: any = 'assets/images/others/contact.jpg';
  public title = 'Contact Us';
  public desc = `Got a Question? We'll give you straight answer`;
  public contactImage = 'assets/images/others/about-1.jpg';
  public settings: Settings;

  constructor(
    public appSettings: AppSettings,
    public formBuilder: FormBuilder,
    public appService: AppService
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    // contactForm continues
    this.contactForm = this.formBuilder.group({
      // Have the input tags equivalent in TS
      name: ['', Validators.required], // Let's work on validation
      email: ['', Validators.compose([Validators.required, emailValidator])], // can add multiple validators
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // onContactFormSubmit method
  public onContactFormSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      const contact = this.contactForm.value;

      // create the object for form data.
      const data = {
        Fullname: contact.name,
        Email: contact.email,
        Comment: contact.message,
      };

      // send the above form data to service
      this.appService.postMessage(data).subscribe(
        (response) => {
          console.log(response);

          // On success return to home page.
          location.href = '';
        },
        (error) => {
          console.warn(error.responseText);
          console.log({ error });
          if (error.error) {
            // this.snackBar.open(error.error, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
          }
        }
      );
    }
  }
}
