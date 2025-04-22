// src/app/technician.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Technician {
  id?: number;
  name: string;
  email: string;
  expertise: string;
}

@Injectable({
  providedIn: 'root',
})
export class TechnicianService {
  private apiUrl = 'http://localhost:4000/technicians'; // URL de tu API de NestJS

  constructor(private http: HttpClient) {}

  createTechnician(technician: Technician): Observable<Technician> {
    return this.http.post<Technician>(this.apiUrl, technician);
  }

  getTechnicians(): Observable<Technician[]> {
    return this.http.get<Technician[]>(this.apiUrl);
  }
}