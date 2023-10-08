import { Component, OnInit } from '@angular/core';
import { PracticeArea } from 'src/app/models/practiceArea.model';
import { ModalService } from 'src/app/services/modal.service';
import { PracticeAreasService } from 'src/app/services/practice-areas.service';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.css'],
})
export class PracticeAreasComponent implements OnInit {
  receivedData: number;
  foundItem: [];
  title: string;
  practiceAreas: PracticeArea[] = [];
  show = false;

  constructor(
    public modal: ModalService,
    private practiceAreaService: PracticeAreasService
  ) {}

  ngOnInit(): void {
    this.practiceAreaService.getAllPracticeAreas().subscribe((res) => {
      this.practiceAreas = res;
      this.show = true;
    });
  }

  openModal(data: number) {
    this.receivedData = data;
    this.practiceAreaService.getPracticeAreaByID(data).subscribe((res) => {
      this.foundItem = res.content;
      this.title = res.title;
      this.modal.toggleModal('details');
    });
  }
}
