import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultationRequest } from '../models/consultationRequest.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultationRequestsService {
  baseUrl: string = 'https://localhost:7216/';

  constructor(private http: HttpClient) {}

  addConsultationRequest(consultationRequest: ConsultationRequest) {
    return this.http.post<ConsultationRequest>(
      `${this.baseUrl}api/ConsultationRequests`,
      consultationRequest
    );
  }
}
