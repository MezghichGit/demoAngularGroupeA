import { Component, OnInit } from '@angular/core';
import { Student } from '../entities/Models';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formateur:string="Mohamed Amine MEZGHICH";
  noms:string[]=["mohamed adem","adem","wassim","khalil","ali"];
  totalEtudiants:number=20;
  test:boolean=true;
  students:Student[]=[
    {
      "nom":"mohamed adem",
      "age":22,
      "email":"medadem@gmail.com",
      "moy":14,
      "address":"Tunis",
      "tel":20200300
    },
    {
      "nom":"wassim",
      "age":21,
      "email":"wassim@gmail.com",
      "moy":15,
      "address":"Tunis",
      "tel":21100400
    },
    {
      "nom":"khalil",
      "age":24,
      "email":"khalil@gmail.com",
      "moy":13.5,
      "address":"Souka",
      "tel":22222333
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
