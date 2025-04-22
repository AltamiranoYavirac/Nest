// src/app/tecnicos-list/tecnicos-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TecnicosService, Tecnicos } from '../services/tecnicos.service';

@Component({
  selector: 'app-tecnicos-list',
  templateUrl: './tecnicos-list.component.html',
  styleUrls: ['./tecnicos-list.component.scss'],
})
export class TecnicosListComponent implements OnInit {
  tecnicoss: Tecnicos[] = [];

  constructor(private tecnicosService: TecnicosService) {}

  ngOnInit() {
    this.tecnicosService.gettecnicoss().subscribe((data) => {
      this.tecnicoss = data;
    });
  }
}