import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { User } from 'src/app/beans/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${environment.context}/users`;

  constructor(private http: HttpClient) { }

  /***********************************************
   * Create & Update
   **********************************************/

  /**
   * Take a User object and submit it via a POST request
   * @param newUser User
   */
  save(newUser: User): any {
    this.http.post(this.url, newUser).subscribe(
      succ => {
        return succ;
      },
      err => {
        return 'Error';
      }
    );
  }

  /***********************************************
   * Read
   **********************************************/

  /**
   * Make a GET request to retrieve all Users
   */
  getAll(): any {
    return this.http.get(`${this.url}`).subscribe(
      succ => {
        return succ;
      },
      err => {
        return 'Error';
      }
    );
  }

  /**
   * Make a GET request to retrieve a User by their id
   * @param id number
   */
  getById(id: number): any {
    this.http.get(`${this.url}/${id}`).subscribe(
      succ => {
        return succ;
      },
      err => {
        return 'Error';
      }
    );
  }

  /**
   * Make a GET request to retrieve a User by their username
   * @param username string
   */
  getByUsername(username: string): any {
    this.http.get(`${this.url}/${username}`).subscribe(
      succ => {
        return succ;
      },
      err => {
        return 'Error';
      }
    );
  }

  /***********************************************
   * Delete
   **********************************************/

  /**
   * Mate a DELETE request to delete a User based on their id
   * @param id number
   */
  delete(id: number): any {
    return this.http.delete(`${this.url}/${id}`).subscribe(
      succ => {
        return succ;
      },
      err => {
        return 'Error';
      }
    );
  }

}
