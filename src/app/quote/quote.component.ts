import { Component , OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    {id:1, name:'Watch finding Nemo',author:'Find an online version and watch merlin find his son'},
    {id:2,name:'Buy Cookies',author:'I have to buy cookies for the parrot'},
    {id:3,name:'Get new Phone Case',author:'Diana has her birthday coming up soon'},
    {id:4,name:'Get Dog Food',author:'Pupper likes expensive sancks'},
    {id:5,name:'Solve math homework',author:'Damn Math'},
    {id:6,name:'Plot my world domination plan',author:'Cause I am an evil overlord'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}