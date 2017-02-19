import { Injectable } from '@angular/core';
import { User } from "../utils/user";

@Injectable()
export class UsersListService {
  users: User[] = [];
  private _id: number = 0;

  gender: any[] = [
    { value: "male", title: "Male" },
    { value: "female", title: "Female" },
    { value: "other", title: "Other" }
  ];

  roles: any[] = [
    {value: 'admin', title: 'Admin'},
    {value: 'editor', title: 'Editor'},
    {value: 'user', title: 'User'}
  ];

  constructor() {
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser({ name, age, role, gender }): User[] {
    let user = new User(
      this._id++,
      name,
      age,
      role,
      gender
      );

    this.users.push(user);

    return this.users;
  }

}
