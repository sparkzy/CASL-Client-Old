import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/beans/character';

@Component({
  selector: 'casl-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.scss']
})
export class CharacterSelectComponent implements OnInit {

  character: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
