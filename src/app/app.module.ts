import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { UsersListService } from "./services/users-list.service";
import { SignupComponent } from './signup/signup.component';
import { FirebaseService } from "./services/firebase.service";
import { LoginComponent } from './login/login.component';
import { BooksListComponent } from './books-list/books-list.component';
import { NewBookComponent } from './new-book/new-book.component';

const appRoutes: Routes = [
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "signin", component: LoginComponent
  },
  {
    path: "books", component: BooksListComponent
  },
  {
    path: "new-book", component: NewBookComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    BooksListComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ UsersListService, FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
