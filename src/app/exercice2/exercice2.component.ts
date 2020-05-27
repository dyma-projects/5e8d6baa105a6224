import { Component, OnInit, ViewChild } from '@angular/core';
import { Exercice2EnfantComponent } from './exercice2-enfant/exercice2-enfant.component';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  
  public txtValue : string;
  public valeur: string;

  @ViewChild (Exercice2EnfantComponent , {static:true}) private enfantComponent:Exercice2EnfantComponent; 


  constructor() { }

  ngOnInit() {


  }


 updateValue(event){
  
      this.txtValue = event;
      this.valeur = this.enfantComponent.txtValue;

  }

}
