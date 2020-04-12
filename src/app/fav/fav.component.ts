import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  @Input('appData') public user: any;

  @Output() public childdata = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    console.log('button')
    this.childdata.emit('from child');
  }

  onButtonToggle() {
    this.flag = !this.flag;
  }

  flag = true;

  persons:any[] = [
    {"name":"dsk","age":10},
    {"name":"dnk","age":20},
    {"name":"dsdsfdnk","age":30},
    {"name":"asdwask","age":50}
  ]; 

  myArray = [1,2,3,4,5];

}
