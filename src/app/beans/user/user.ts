export class User {

  private id: number;
  private username: string;
  private password: string;
  private email: string;
  // tslint:disable-next-line: variable-name
  private firstName: string;
  // tslint:disable-next-line: variable-name
  private lastName: string;

  // tslint:disable-next-line: variable-name
  constructor($id: number, $username: string, $password: string, $email: string, $firstName: string = '', $lastName: string = '') {
    this.id = $id;
    this.username = $username;
    this.password = $password;
    this.email = $email;
    this.firstName = $firstName;
    this.lastName = $lastName;
  }

  /**
   * Getter $id
   * @return id {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Setter $id
   * @param id number
   */
  public set $id(id: number) {
    this.id = id;
  }

  /**
   * Getter $username
   * @return username {string}
   */
  public get $username(): string {
    return this.username;
  }

  /**
   * Setter $username
   * @param username string
   */
  public set $username(username: string) {
    this.username = username;
  }

  /**
   * Getter $password
   * @return password {string}
   */
  public get $password(): string {
    return this.password;
  }

  /**
   * Setter $password
   * @param password string
   */
  public set $password(password: string) {
    this.password = password;
  }

  /**
   * Getter $email
   * @return email {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Setter $email
   * @param email string
   */
  public set $email(email: string) {
    this.email = email;
  }

  /**
   * Getter $firstName
   * @return firstName {string}
   */
  public get $firstName(): string {
    return this.firstName;
  }

  /**
   * Setter $firstName
   * @param firstName string
   */
  // tslint:disable-next-line: variable-name
  public set $firstName(firstName: string) {
    this.firstName = firstName;
  }

  /**
   * Getter $lastName
   * @return lastName {string}
   */
  public get $lastName(): string {
    return this.lastName;
  }

  /**
   * Setter $lastName
   * @param lastName string
   */
  // tslint:disable-next-line: variable-name
  public set $lastName(lastName: string) {
    this.lastName = lastName;
  }

}
