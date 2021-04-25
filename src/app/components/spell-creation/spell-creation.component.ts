import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Spell } from 'src/app/beans/spell';

@Component({
  selector: 'casl-spell-creation',
  templateUrl: './spell-creation.component.html',
  styleUrls: ['./spell-creation.component.scss']
})
export class SpellCreationComponent implements OnInit {

  @Output() newSpellEvent = new EventEmitter<Spell>();

  name: string;
  somatic = [];
  material = [];
  verbal = [];
  effects = [];
  description: string;

  constructor() { }

  ngOnInit(): void {
  }

  addSomatic(): void {
    this.somatic.push('');
  }

  addMaterial(): void {
    this.material.push('');
  }

  addVerbal(): void {
    this.verbal.push('');
  }

  addEffect(): void {
    this.effects.push('');
  }

  createSpell(): Spell {
    console.log('creating new spell...');
    const newSpell = new Spell(this.name, this.somatic, this.material, this.verbal, this.effects, this.description);
    this.newSpellEvent.emit(newSpell);
    return newSpell;
  }

}
