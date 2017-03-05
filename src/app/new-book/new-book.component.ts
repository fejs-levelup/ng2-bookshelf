import { Component, OnInit } from '@angular/core';
import { BooksService } from "./books.service";
import { FirebaseService } from "./../services/firebase.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
  providers: [ BooksService ]
})
export class NewBookComponent implements OnInit {

  book = {
    title: "",
    author: "",
    description: "",
    pageCount: ""
  };

  constructor(
    private booksService: BooksService,
    private firebaseService: FirebaseService
    ) { }

  ngOnInit() {
  }

  addNewBook() {
    this.booksService.addNewBook(this.book).then(res => {
      res.subscribe()
    }).catch(e => {
      console.log(e);
    })
  }
}
