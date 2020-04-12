import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private getPersons:HttpService) { }
  persons = [];
  ngOnInit(): void {
    this.getPersons.getData().subscribe(data=>this.persons = data)
  }


}
