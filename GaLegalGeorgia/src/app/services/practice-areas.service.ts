import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PracticeArea,
  PracticeAreaDetails,
} from '../models/practiceArea.model';

@Injectable({
  providedIn: 'root',
})
export class PracticeAreasService {
  baseUrl: string = 'https://localhost:7216/';

  constructor(private http: HttpClient) {}

  getAllPracticeAreas(): Observable<PracticeArea[]> {
    return this.http.get<PracticeArea[]>(`${this.baseUrl}api/PracticeAreas`);
  }

  getPracticeAreaByID(id: number): Observable<PracticeAreaDetails> {
    return this.http.get<PracticeAreaDetails>(
      `${this.baseUrl}api/PracticeAreas/${id}`
    );
  }
}
