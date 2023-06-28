import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    const works = [
      {
        "id": 1,
        "title": "Primer trabajo",
        "urlImage": "../../../assets/img/work1.png",
        "description": "Me encanto ese trabajo"
      },
      {
        "id": 2,
        "title": "Primer trabajo",
        "urlImage": "../../../assets/img/work2.png",
        "description": "Me encanto ese trabajo"
      },
      {
        "id": 3,
        "title": "Primer trabajo",
        "urlImage": "../../../assets/img/work3.jpg",
        "description": "Me encanto ese trabajo"
      },
      {
        "id": 4,
        "title": "Primer trabajo",
        "urlImage": "../../../assets/img/work1.png",
        "description": "Me encanto ese trabajo"
      },
      {
        "id": 5,
        "title": "Primer trabajo",
        "urlImage": "../../../assets/img/work2.png",
        "description": "Me encanto ese trabajo"
      }
    ];
    return {works}
  }
}
