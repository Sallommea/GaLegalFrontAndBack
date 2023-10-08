import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, InputComponent],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  isSubmitted: boolean = false;
  contactForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(2),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(13),
      this.correctNumber,
    ]),
    company: new FormControl(),
    description: new FormControl(),
  });

  correctNumber(control: FormControl) {
    const regex = new RegExp('^[0-9+]+$');
    if (control.value != null && !regex.test(control.value)) {
      return { correctNumber: true };
    }
    return null;
  }
  onSubmit($event: Event) {
    $event.preventDefault();
    console.log(this.contactForm);
    this.isSubmitted = true;
  }
}
