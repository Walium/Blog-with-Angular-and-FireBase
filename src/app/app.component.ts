import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyA4Rhi6nWGhph2wshSPIsVN4qed6QQzqPE",
      authDomain: "books-db-id.firebaseapp.com",
      databaseURL: "https://books-db-id.firebaseio.com",
      projectId: "books-db-id",
      storageBucket: "books-db-id.appspot.com",
      messagingSenderId: "26515844341"
    };
    firebase.initializeApp(config);
  }
}
