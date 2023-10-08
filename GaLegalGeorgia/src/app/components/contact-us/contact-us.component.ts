import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultationRequest } from 'src/app/models/consultationRequest.model';
import { ConsultationRequestsService } from 'src/app/services/consultation-requests.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
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
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, this.correctNumber]),
    company: new FormControl(),
    description: new FormControl(),
  });

  showModal: boolean = false;

  constructor(
    private router: Router,
    public modal: ModalService,
    private consultationRequestsService: ConsultationRequestsService
  ) {}
  correctNumber(control: FormControl) {
    const regex = new RegExp('^[0-9+]+$');
    if (control.value != null && !regex.test(control.value)) {
      return { correctNumber: true };
    }
    return null;
  }

  onSubmit($event: Event) {
    //   $event.preventDefault();

    this.isSubmitted = true;

    this.isSubmitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    const formAllInfo: ConsultationRequest = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      phoneNumber: this.contactForm.value.phoneNumber,
      email: this.contactForm.value.email,
      company: this.contactForm.value.company,
      description: this.contactForm.value.description,
    };

    this.consultationRequestsService
      .addConsultationRequest(formAllInfo)
      .subscribe((res) => {});

    this.modal.toggleModal('auth');
  }

  closeModal() {
    this.showModal = !this.showModal;
    setTimeout(() => {
      this.router.navigate(['./']);
    });
  }
}
