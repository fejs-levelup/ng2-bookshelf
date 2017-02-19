import { Component } from '@angular/core';
import { UsersListService } from "./services/users-list.service";
import { User } from "./utils/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  users: User[];

  constructor(
    private usersListService: UsersListService,
    private route: Router
    ) {}

  ngOnInit() {
    this.users = this.usersListService.getUsers();
  }

  navigateToForm() {
    this.route.navigate(["/add-user"]);
  }
}
