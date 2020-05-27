import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercice2-enfant',
  templateUrl: './exercice2-enfant.component.html',
  styleUrls: ['./exercice2-enfant.component.css']
})
export class Exercice2EnfantComponent implements OnInit {

  @Input()  txtValue:string;

  constructor() { }

  ngOnInit(): void {
  }
  
  


}
