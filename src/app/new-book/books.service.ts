import { Injectable } from '@angular/core';
import { FirebaseService } from "../services/firebase.service";
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {

  constructor(
    private firebaseService: FirebaseService,
    private http: Http
    ) { }

  addNewBook(book) {
    return new Promise((res, rej) => {
      let user = this.firebaseService.getUser();

      if(!user) {
        return rej("User was not found");
      }

      user.getToken()
        .then(token => {
          this.sendNewBookRequest(book, token, res, rej);
        }).catch(e => {
          rej(e);
        });
    });
  }

  sendNewBookRequest(book, token, res, rej) {
    const headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": token
    });

    const options = new RequestOptions({ headers });

    let request = this.http.
      post("http://46.101.241.147:5000/book", book, options).
      map((res: Response) => {
        let data = res.json();

        return data.data || {};
      }).
      catch(e => e);
  }

}
