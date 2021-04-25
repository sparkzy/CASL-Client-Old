import { Item } from './item';
import { Spell } from './spell';

export class Character {

  // Info
  private name: string;
  private age: number;
  private height: number;
  private weight: number;
  private species: string;
  private bio: string;
  private description: string;
  private miscInfo: string;

  // HP
  private hpMax: number;
  private hpCurrent: number;
  private hpTrauma: number;

  // Mental
  private mentalMax: number;
  private mentalCurrent: number;
  private metnalTrauma: number;

  // Stmaina
  private staminaMax: number;
  private staminaCurrent: number;
  private staminaTrauma: number;

  // Energy
  private energyMax: number;
  private energyCurrent: number;
  private energyTrauma: number;

  // Physical
  private strength: number;
  private speed: number;
  private flexibility: number;
  private balance: number;
  private dexterity: number;
  private toughness: number;
  private reflex: number;

  // Mental
  private learning: number;
  private logic: number;
  private wit: number;
  private will: number;
  private fortitude: number;
  private imagination: number;
  private acuity: number;

  // S.A.F.E.
  private spells: Spell[];
  private abilities: Spell[];
  private features: Item[];
  private equipment: Item[];
  private items: Item[];

  constructor($name: string, $age: number, $height: number, $weight: number, $species: string, $bio: string, $miscInfo: string,
              $description: string, $strength: number, $speed: number, $flexibility: number, $balance: number, $dexterity: number,
              $toughness: number, $reflex: number, $learning: number, $logic: number, $wit: number, $will: number, $fortitude: number,
              $imagination: number, $acuity: number, $spells: Spell[], $abilities: Spell[], $features: Item[], $equipment: Item[],
              $items: Item[]) {
    this.name = $name;
    this.age = $age;
    this.height = $height;
    this.weight = $weight;
    this.species = $species;
    this.bio = $bio;
    this.description = $description;
    this.strength = $strength;
    this.speed = $speed;
    this.flexibility = $flexibility;
    this.balance = $balance;
    this.dexterity = $dexterity;
    this.toughness = $toughness;
    this.reflex = $reflex;
    this.learning = $learning;
    this.logic = $logic;
    this.wit = $wit;
    this.will = $will;
    this.fortitude = $fortitude;
    this.imagination = $imagination;
    this.acuity = $acuity;
    this.spells = $spells;
    this.abilities = $abilities;
    this.features = $features;
    this.equipment = $equipment;
    this.items = $items;
  }

  // tslint:disable:adjacent-overload-signatures
  // tslint:disable:no-redundant-jsdoc

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $age
   * @return {number}
   */
  public get $age(): number {
    return this.age;
  }

  /**
   * Getter $height
   * @return {number}
   */
  public get $height(): number {
    return this.height;
  }

  /**
   * Getter $weight
   * @return {number}
   */
  public get $weight(): number {
    return this.weight;
  }

  /**
   * Getter $species
   * @return {string}
   */
  public get $species(): string {
    return this.species;
  }

  /**
   * Getter $bio
   * @return {string}
   */
  public get $bio(): string {
    return this.bio;
  }

  /**
   * Getter $descripiton
   * @return {string}
   */
   public get $description(): string {
    return this.description;
  }

  /**
   * Getter $miscInfo
   * @return {string}
   */
  public get $miscInfo(): string {
    return this.miscInfo;
  }

  /**
   * Getter $hpMax
   * @return {number}
   */
  public get $hpMax(): number {
    return this.hpMax;
  }

  /**
   * Getter $hpCurrent
   * @return {number}
   */
  public get $hpCurrent(): number {
    return this.hpCurrent;
  }

  /**
   * Getter $hpTrauma
   * @return {number}
   */
  public get $hpTrauma(): number {
    return this.hpTrauma;
  }

  /**
   * Getter $mentalMax
   * @return {number}
   */
  public get $mentalMax(): number {
    return this.mentalMax;
  }

  /**
   * Getter $mentalCurrent
   * @return {number}
   */
  public get $mentalCurrent(): number {
    return this.mentalCurrent;
  }

  /**
   * Getter $metnalTrauma
   * @return {number}
   */
  public get $metnalTrauma(): number {
    return this.metnalTrauma;
  }

  /**
   * Getter $staminaMax
   * @return {number}
   */
  public get $staminaMax(): number {
    return this.staminaMax;
  }

  /**
   * Getter $staminaCurrent
   * @return {number}
   */
  public get $staminaCurrent(): number {
    return this.staminaCurrent;
  }

  /**
   * Getter $staminaTrauma
   * @return {number}
   */
  public get $staminaTrauma(): number {
    return this.staminaTrauma;
  }

  /**
   * Getter $energyMax
   * @return {number}
   */
  public get $energyMax(): number {
    return this.energyMax;
  }

  /**
   * Getter $energyCurrent
   * @return {number}
   */
  public get $energyCurrent(): number {
    return this.energyCurrent;
  }

  /**
   * Getter $energyTrauma
   * @return {number}
   */
  public get $energyTrauma(): number {
    return this.energyTrauma;
  }

  /**
   * Getter $strength
   * @return {number}
   */
  public get $strength(): number {
    return this.strength;
  }

  /**
   * Getter $speed
   * @return {number}
   */
  public get $speed(): number {
    return this.speed;
  }

  /**
   * Getter $flexibility
   * @return {number}
   */
  public get $flexibility(): number {
    return this.flexibility;
  }

  /**
   * Getter $balance
   * @return {number}
   */
  public get $balance(): number {
    return this.balance;
  }

  /**
   * Getter $dexterity
   * @return {number}
   */
  public get $dexterity(): number {
    return this.dexterity;
  }

  /**
   * Getter $toughness
   * @return {number}
   */
  public get $toughness(): number {
    return this.toughness;
  }

  /**
   * Getter $reflex
   * @return {number}
   */
  public get $reflex(): number {
    return this.reflex;
  }

  /**
   * Getter $learning
   * @return {number}
   */
  public get $learning(): number {
    return this.learning;
  }

  /**
   * Getter $logic
   * @return {number}
   */
  public get $logic(): number {
    return this.logic;
  }

  /**
   * Getter $wit
   * @return {number}
   */
  public get $wit(): number {
    return this.wit;
  }

  /**
   * Getter $will
   * @return {number}
   */
  public get $will(): number {
    return this.will;
  }

  /**
   * Getter $fortitude
   * @return {number}
   */
  public get $fortitude(): number {
    return this.fortitude;
  }

  /**
   * Getter $imagination
   * @return {number}
   */
  public get $imagination(): number {
    return this.imagination;
  }

  /**
   * Getter $acuity
   * @return {number}
   */
  public get $acuity(): number {
    return this.acuity;
  }

  /**
   * Getter $spells
   * @return {Spell[]}
   */
  public get $spells(): Spell[] {
    return this.spells;
  }

  /**
   * Getter $abilities
   * @return {Spell[]}
   */
  public get $abilities(): Spell[] {
    return this.abilities;
  }

  /**
   * Getter $features
   * @return {Item[]}
   */
  public get $features(): Item[] {
    return this.features;
  }

  /**
   * Getter $equipment
   * @return {Item[]}
   */
  public get $equipment(): Item[] {
    return this.equipment;
  }

  /**
   * Getter $items
   * @return {Item[]}
   */
  public get $items(): Item[] {
    return this.items;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $age
   * @param {number} value
   */
  public set $age(value: number) {
    this.age = value;
  }

  /**
   * Setter $height
   * @param {number} value
   */
  public set $height(value: number) {
    this.height = value;
  }

  /**
   * Setter $weight
   * @param {number} value
   */
  public set $weight(value: number) {
    this.weight = value;
  }

  /**
   * Setter $species
   * @param {string} value
   */
  public set $species(value: string) {
    this.species = value;
  }

  /**
   * Setter $bio
   * @param {string} value
   */
  public set $bio(value: string) {
    this.bio = value;
  }

  /**
   * Setter $description
   * @param {string} value
   */
   public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter $miscInfo
   * @param {string} value
   */
  public set $miscInfo(value: string) {
    this.miscInfo = value;
  }

  /**
   * Setter $hpMax
   * @param {number} value
   */
  public set $hpMax(value: number) {
    this.hpMax = value;
  }

  /**
   * Setter $hpCurrent
   * @param {number} value
   */
  public set $hpCurrent(value: number) {
    this.hpCurrent = value;
  }

  /**
   * Setter $hpTrauma
   * @param {number} value
   */
  public set $hpTrauma(value: number) {
    this.hpTrauma = value;
  }

  /**
   * Setter $mentalMax
   * @param {number} value
   */
  public set $mentalMax(value: number) {
    this.mentalMax = value;
  }

  /**
   * Setter $mentalCurrent
   * @param {number} value
   */
  public set $mentalCurrent(value: number) {
    this.mentalCurrent = value;
  }

  /**
   * Setter $metnalTrauma
   * @param {number} value
   */
  public set $metnalTrauma(value: number) {
    this.metnalTrauma = value;
  }

  /**
   * Setter $staminaMax
   * @param {number} value
   */
  public set $staminaMax(value: number) {
    this.staminaMax = value;
  }

  /**
   * Setter $staminaCurrent
   * @param {number} value
   */
  public set $staminaCurrent(value: number) {
    this.staminaCurrent = value;
  }

  /**
   * Setter $staminaTrauma
   * @param {number} value
   */
  public set $staminaTrauma(value: number) {
    this.staminaTrauma = value;
  }

  /**
   * Setter $energyMax
   * @param {number} value
   */
  public set $energyMax(value: number) {
    this.energyMax = value;
  }

  /**
   * Setter $energyCurrent
   * @param {number} value
   */
  public set $energyCurrent(value: number) {
    this.energyCurrent = value;
  }

  /**
   * Setter $energyTrauma
   * @param {number} value
   */
  public set $energyTrauma(value: number) {
    this.energyTrauma = value;
  }

  /**
   * Setter $strength
   * @param {number} value
   */
  public set $strength(value: number) {
    this.strength = value;
  }

  /**
   * Setter $speed
   * @param {number} value
   */
  public set $speed(value: number) {
    this.speed = value;
  }

  /**
   * Setter $flexibility
   * @param {number} value
   */
  public set $flexibility(value: number) {
    this.flexibility = value;
  }

  /**
   * Setter $balance
   * @param {number} value
   */
  public set $balance(value: number) {
    this.balance = value;
  }

  /**
   * Setter $dexterity
   * @param {number} value
   */
  public set $dexterity(value: number) {
    this.dexterity = value;
  }

  /**
   * Setter $toughness
   * @param {number} value
   */
  public set $toughness(value: number) {
    this.toughness = value;
  }

  /**
   * Setter $reflex
   * @param {number} value
   */
  public set $reflex(value: number) {
    this.reflex = value;
  }

  /**
   * Setter $learning
   * @param {number} value
   */
  public set $learning(value: number) {
    this.learning = value;
  }

  /**
   * Setter $logic
   * @param {number} value
   */
  public set $logic(value: number) {
    this.logic = value;
  }

  /**
   * Setter $wit
   * @param {number} value
   */
  public set $wit(value: number) {
    this.wit = value;
  }

  /**
   * Setter $will
   * @param {number} value
   */
  public set $will(value: number) {
    this.will = value;
  }

  /**
   * Setter $fortitude
   * @param {number} value
   */
  public set $fortitude(value: number) {
    this.fortitude = value;
  }

  /**
   * Setter $imagination
   * @param {number} value
   */
  public set $imagination(value: number) {
    this.imagination = value;
  }

  /**
   * Setter $acuity
   * @param {number} value
   */
  public set $acuity(value: number) {
    this.acuity = value;
  }

  /**
   * Setter $spells
   * @param {Spell[]} value
   */
  public set $spells(value: Spell[]) {
    this.spells = value;
  }

  /**
   * Setter $abilities
   * @param {Spell[]} value
   */
  public set $abilities(value: Spell[]) {
    this.abilities = value;
  }

  /**
   * Setter $features
   * @param {Item[]} value
   */
  public set $features(value: Item[]) {
    this.features = value;
  }

  /**
   * Setter $equipment
   * @param {Item[]} value
   */
  public set $equipment(value: Item[]) {
    this.equipment = value;
  }

  /**
   * Setter $items
   * @param {Item[]} value
   */
  public set $items(value: Item[]) {
    this.items = value;
  }

}
