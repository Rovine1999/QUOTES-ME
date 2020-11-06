import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteme:string[];

  constructor(){
    this.quoteme = ['I love Reggae songs', 'I love my life', 'I like walking alone']
  } 
}