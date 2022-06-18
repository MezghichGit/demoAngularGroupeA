import { Component, OnInit } from '@angular/core';
import { Student } from '../entities/Models';
import {FirstLetterUpperCasePipe} from '../pipes/first-letter-upper-case.pipe'
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
  logo:string="data:image/png;base64,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";
  profil:string="https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-ic%C3%B4ne-de-profil-avatar-portrait-masculin-personne-d%C3%A9contract%C3%A9e.jpg";
  cours:string="Angular";
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

  changeValue()
  {
    //alert("Valeur de test = "+ this.test);
    this.test = !this.test;
  }

}
