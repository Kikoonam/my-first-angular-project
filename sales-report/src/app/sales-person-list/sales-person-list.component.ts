import { Component, OnInit } from '@angular/core';
import { SalePerson } from './sale-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesList :SalePerson[] = [
    new SalePerson("firstname","lastname","email",100),
    new SalePerson("firstname","lastname","email",100),
    new SalePerson("firstname","lastname","email",100),
    new SalePerson("firstname","lastname","email",100),
  ]

}
