export class Spell {

  private name: string;
  private somatic: string[];
  private material: string[];
  private verbal: string[];
  private effects: string[];
  private description: string;

  constructor($name: string, $somatic: string[], $material: string[], $verbal: string[], $effects: string[], $description: string) {
    this.name = $name;
    this.somatic = $somatic;
    this.material = $material;
    this.verbal = $verbal;
    this.effects = $effects;
    this.description = $description;
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
   * Getter $somatic
   * @return {string[]}
   */
  public get $somatic(): string[] {
    return this.somatic;
  }

  /**
   * Getter $material
   * @return {string[]}
   */
  public get $material(): string[] {
    return this.material;
  }

  /**
   * Getter $verbal
   * @return {string[]}
   */
  public get $verbal(): string[] {
    return this.verbal;
  }

  /**
   * Getter $effects
   * @return {string[]}
   */
  public get $effects(): string[] {
    return this.effects;
  }

  /**
   * Getter $description
   * @return {string}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $somatic
   * @param {string[]} value
   */
  public set $somatic(value: string[]) {
    this.somatic = value;
  }

  /**
   * Setter $material
   * @param {string[]} value
   */
  public set $material(value: string[]) {
    this.material = value;
  }

  /**
   * Setter $verbal
   * @param {string[]} value
   */
  public set $verbal(value: string[]) {
    this.verbal = value;
  }

  /**
   * Setter $effects
   * @param {string[]} value
   */
  public set $effects(value: string[]) {
    this.effects = value;
  }

  /**
   * Setter $description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }


}
