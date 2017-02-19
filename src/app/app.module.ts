import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

import { UsersListService } from "./services/users-list.service";

const appRoutes: Routes = [
  {
    path: "add-user", component: AddUserFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ UsersListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
