import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-submitted',
  templateUrl: './form-submitted.component.html',
  styleUrls: ['./form-submitted.component.css'],
})
export class FormSubmittedComponent {
  constructor(private router: Router) {}

  onCloseModal() {
    this.router.navigate(['./']);
  }
}
