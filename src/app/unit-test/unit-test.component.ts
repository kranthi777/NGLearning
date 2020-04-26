import { DataService } from './data-service';
import { UserService } from './unit-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css'],
  providers: [UserService, DataService]
})
export class UnitTestComponent implements OnInit {
  isLoggedIn: boolean = false;
  user:{"name":string};
  data:string;
  constructor(private unitService: UserService, private dataService: DataService) { }

  ngOnInit(): void {
    this.user = this.unitService.user;
    this.dataService.getData().then((res:string)=>this.data = res)
  }

}
