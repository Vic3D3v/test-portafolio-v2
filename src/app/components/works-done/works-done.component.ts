import { Component, Input, OnInit } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';
import { WorkListService } from 'src/app/services/work-list.service';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent implements OnInit {
  @Input() title: string = 'Trabajos';

  /**
   * variable del tipo de la interfaz agregando una cadena vacia
   */
  workList: WorkModel[] = [];

  constructor (private workListService: WorkListService) { }
  /**
   * Ciclo de vida del componente
   */
  ngOnInit(): void {
    this.getWorkList();
  }
  
  /**
   * funcion que simula el consumo del endpoint de un data provider
   */
  getWorkList(): void{
    this.workList = this.workListService.getWorks();
  }
}
