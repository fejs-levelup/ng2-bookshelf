import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { Router } from "@angular/router";

@Injectable()
export class FirebaseService {

  isLoggedIn: boolean = false;

  constructor(
    private router: Router
    ) {
    firebase.initializeApp({
      apiKey: "AIzaSyCUtXgbyeV8UxnDkIrS7WLazFXhN24ZaFE",
      authDomain: "ng2-bookshelf.firebaseapp.com"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.isLoggedIn = true;
        console.log(user);
        return;
      }

      this.isLoggedIn = false;
      this.router.navigate(["/signin"]);
    });
  }

  signup({ email, password }) {
    firebase.auth().
      createUserWithEmailAndPassword(email, password).
      catch(err => {
        console.log(err);
      });
  }

  signin({ email, password }) {
    return firebase.auth().
      signInWithEmailAndPassword(email, password);
  }

  logout() {
    return firebase.auth().signOut();
  }

  getUser() {
    return firebase.auth().currentUser;
  }

}
