import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultationRequest } from 'src/app/models/consultationRequest.model';
import { ConsultationRequestsService } from 'src/app/services/consultation-requests.service';
import { ModalService } from 'src/app/services/modal.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  showbutton: boolean = false;
  scaleInCard: boolean = false;
  isSubmitted: boolean = false;
  showModal: boolean = false;
  receivedData: number;
  foundItem: any;
  title: string;

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
    company: new FormControl(''),
    description: new FormControl(''),
  });

  texts: any = [
    {
      id: 1,
      title: 'სახელშეკრულებო სამართალი',
      content: {
        par1: 'ხელშეკრულებების სამართლებრივი ანალიზი',
        par2: 'ხელშეკრულებების დადება',
        par3: 'წარმომადგენლობა სასამართლოების წინაშე',
      },
    },
    {
      id: 2,
      title: 'ადმინისტრაციული სამართალი',
      content: {
        par1: 'წარმომადგელობა ადმინისტრაციულ ორგანოებთან',
        par2: 'ხელშეკრულებების დადება',
      },
    },
    {
      id: 3,
      title: 'სამოქალაქო სამართალი',
      content: {
        par1: 'ხელშეკრულებების სამართლებრივი ანალიზი',
        par2: 'წარმომადგენლობა ადმინისტრაციულ ორგანოებთან',
        par3: 'წარმომადგენლობა სასამართლოების წინაშე',
      },
    },
    {
      id: 4,
      title: 'საოჯახო და მემკვიდრეობითი სამართალი',
      content: {
        par1: 'მემკვიდრეობის მიღება',
        par2: 'ალიმენტი',
        par3: 'წარმომადგენლობა სასამართლოების წინაშე',
        par4: 'ქონების გაყოფა',
        par5: 'შვილის მიკუთვნება',
      },
    },
    {
      id: 5,
      title: 'შრომის სამართალი',
      content: {
        par1: 'შრომითი ხელშეკრულებების სამართლებრივი ანალიზი',
        par2: 'ხელშეკრულებების დადება',
        par3: 'წარმომადგენლობა სასამართლოების წინაშე',
      },
    },
    {
      id: 6,
      title: 'სააღსრულებო სამართალი',
      content: {
        par1: 'კონსულტაციები აღსრულებასთან დაკავშირებით',
        par2: 'ხელშეკრულებების დადება',
        par3: 'წარმომადგენლობა აღსრულების ერვნულ ბიუროში',
      },
    },
    {
      id: 7,
      title: 'სამეწარმეო სამართალი',
      content: {
        par1: 'ბიზნეს გარიგებები',
        par2: 'სასამართლო წარმომადგებლობა',
        par3: 'წარმომადგენლობა მესამე პირთა წინაშე',
      },
    },
    {
      id: 8,
      title: 'უძრავი ქონება და პრივატიზაცია',
      content: {
        par1: 'ხელშეკრულებების სამართლებრივი ანალიზი',
        par2: 'ხელშეკრულებების დადება',
      },
    },
    {
      id: 9,
      title: 'ადმინისტრაციული სამართალდარღვევები',
      content: {
        par1: 'ხელშეკრულებების სამართლებრივი ანალიზი',
        par2: 'ხელშეკრულებების დადება',
        par3: 'წარმომადგენლობა სასამართლოების წინაშე',
        par4: 'წარმომადგენლობა ადმინისტრაციული ორგანოების წინაშე',
      },
    },
  ];

  constructor(
    public modal: ModalService,
    private router: Router,
    private consultationRequestsService: ConsultationRequestsService
  ) {}

  openModal(data: number) {
    this.receivedData = data;
    const foundItem = this.texts.find((el) => el.id === this.receivedData);
    const content = foundItem.content;
    this.foundItem = Object.values(content);
    this.title = foundItem.title;
    this.modal.toggleModal('details');
  }
  correctNumber(control: FormControl) {
    const regex = new RegExp('^[0-9+]+$');
    if (control.value != null && !regex.test(control.value)) {
      return { correctNumber: true };
    }
    return null;
  }

  onSubmit($event: Event) {
    // $event.preventDefault();
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
    this.router.navigate(['formsubmitted']);
  }
}
