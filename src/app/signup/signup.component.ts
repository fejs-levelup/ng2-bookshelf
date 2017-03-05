import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "./../services/firebase.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email: "",
    password: ""
  };

  constructor(
    private firebaseService: FirebaseService
    ) { }

  ngOnInit() {
  }

  signup() {
    console.log(this.user);
    this.firebaseService.signup(this.user);
    this.user.email = "";
    this.user.password = "";
  }

}
