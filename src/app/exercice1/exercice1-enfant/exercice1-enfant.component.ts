import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {


  counterValue : number = 0;
  @Output () counterChange = new EventEmitter()

  @Input () counter: number;



  constructor() { }

  ngOnInit() {
  }


  increment(){
    this.counterValue++;
    this.counterChange.emit({
    value: this.counterValue
    });
  }

  decrement(){
    this.counterValue--;
    this.counterChange.emit({
    value: this.counterValue
    });
  }

}
