import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }

   salesPersonList:SalesPerson[]=[
     new SalesPerson("Anup","Kumar","anup.kumar@luv2code.com",50000),
     new SalesPerson("Jogn","Doe","jogn.doe@luv2code.com",40000),
     new SalesPerson("Claire","Marphy","clarie.murphy@luv2code.com",90000),
     new SalesPerson("Mai","Turong","mai.turong@luv2code.com",50000)
    ]


   }



