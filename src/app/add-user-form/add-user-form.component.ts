import { Component, ViewEncapsulation } from '@angular/core';
import { UsersListService } from "../services/users-list.service";

@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AddUserFormComponent {

  genders = this.usersListService.gender;
  roles = this.usersListService.roles;

  user = {
    name: "",
    age: null,
    gender: this.genders[2].value,
    role: this.roles[0].value
  }

  constructor(
    public usersListService: UsersListService
    ) { }

  createUser() {
    let user = Object.assign({}, this.user),
      name = user.name.trim(),
      age = user.age;

    if(!name) return;
    else if(name.length < 2 || name.length > 30) return;

    if(age > 120 || age < 6) return;

    if(!user.gender) return;

    let userslist = this.usersListService.addUser(user);
    console.log(userslist);
  }

}
