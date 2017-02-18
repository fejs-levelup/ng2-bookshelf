import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  public innerComponent: string;
  @Input() users;

  @Output() addNewUser = new EventEmitter();

  newUserData = {
    name: "",
    age: ""
  }

  addUser() {
    let { name, age } = this.newUserData;
    this.addNewUser.emit({ name, age });
  }

  constructor() {
    this.innerComponent = "hello from inner compontent";
  }

  ngOnInit() {
  }

}
