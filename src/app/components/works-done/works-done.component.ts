import { Component, Input } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';
import { WORKS } from 'src/assets/files/mock-works';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent {
  @Input() title: string = 'Trabajos';

  /*work = {
    "id": 1,
    "title": "Primer trabajo",
    "urlImage": "../../../assets/img/work2.png",
    "description": "Me encanto ese trabajo"
  }*/

  workList:WorkModel[] = WORKS;
}
