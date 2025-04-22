// src/app/tecnicos-form/tecnicos-form.component.ts
import { Component } from '@angular/core';
import { TecnicosService, Tecnicos } from '../services/tecnicos.service';

@Component({
  selector: 'app-tecnicos-form',
  templateUrl: './tecnicos-form.component.html',
  styleUrls: ['./tecnicos-form.component.scss'],
})
export class tecnicosFormComponent {
  tecnicos: Tecnicos = { name: '', email: '', expertise: '' };

  constructor(private tecnicosService: TecnicosService) {}

  onSubmit() {
    this.tecnicosService.createtecnicos(this.tecnicos).subscribe((response) => {
      console.log('tecnicos created:', response);
      this.tecnicos = { name: '', email: '', expertise: '' }; // Reset form
    });
  }
}