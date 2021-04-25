import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'casl-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {

  attributesPhysical = ['Strength', 'Speed', 'Flexibility', 'Balance', 'Dexterity', 'Toughness', 'Reflex'];
  attributesMental = ['Learning', 'Logic', 'Wit', 'Will', 'Fortitude', 'Imagination', 'Acuity'];

  name: string;
  age: number;
  height: number;
  weight: number;
  species: string;
  bio: string;
  description: string;
  miscInfo: string;

  // Physical
  strength: number;
  speed: number;
  flexibility: number;
  balance: number;
  dexterity: number;
  toughness: number;
  reflex: number;

  // Mental
  learning: number;
  logic: number;
  wit: number;
  will: number;
  fortitude: number;
  imagination: number;
  acuity: number;

  constructor(formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }

}
