
import { Component, OnInit } from '@angular/core';
import { TestService } from './../test.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private testService : TestService) {
    //persons = this.persons.getPersons();
   }
  inputValue:string = '';
  items:string[] = [];
  
  ngOnInit(): void {
    this.persons = this.testService.getPersons();
  }
  persons=[];

  //test = this.persons.getPersons();

  onTodoAdd(): void {
    if (this.inputValue.length) {
    this.items.push(this.inputValue);
    console.log(this.items);
    this.inputValue = '';
    }
    
  }

  removeTodo(item):void {
    console.log(item);
    //other approach to delete this.items.splice(i,1)
    let x = this.items.filter((i)=>{
      return i != item
    });
    this.items = x;
  }

}
