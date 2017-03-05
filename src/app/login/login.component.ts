import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "./../services/firebase.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: "",
    password: ""
  };

  constructor(
    private firebaseService: FirebaseService
    ) { }

  ngOnInit() {
  }

  signin() {
    this.firebaseService.signin(this.user).
      catch(e => {
        console.log(e);
      });
  }
}
