import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FirebaseapiService } from './firebaseapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Serverless';
  MyBooks: any = [];
  titleValue = '';
  authorValue = '';

  constructor(public firebaseApiService: FirebaseapiService){
  }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks(){
    return this.firebaseApiService.getBooks().subscribe((data: {}) => {
      this.MyBooks = data;
    })
  }

  addBooks() {
      return this.firebaseApiService.addBook(this.titleValue, this.authorValue).subscribe((data: {}) => {
        this.MyBooks = data;
        this.titleValue = '';
        this.authorValue = '';
      })
  }

  deleteBook(id: string) {
    return this.firebaseApiService.delBook(id).subscribe((data: {}) => {
      this.MyBooks = data;
    })
}
}
