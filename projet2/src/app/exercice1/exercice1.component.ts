import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styles: []
})
export class Exercice1Component implements OnInit {

	public nom : string = "Dyma";

	public alignement : string = 'center';

	public couleur : string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  modifierNom() {

    this.nom = 'Autres';
  }

}
