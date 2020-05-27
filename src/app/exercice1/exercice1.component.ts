import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public counter: number = 0; 

  result = 0;

  constructor() { }

  ngOnInit() {
  }

updateCounter(event){
  this.result = event.value;

  //@input ()
  this.counter = this.result;
}




}
