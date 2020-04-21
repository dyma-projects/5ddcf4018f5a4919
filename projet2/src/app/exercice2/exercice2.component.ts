import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styles: []
})
export class Exercice2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  afficherClick() {
  	console.log('clic');
  }

}
