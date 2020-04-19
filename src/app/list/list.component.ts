import { HttpService } from './../http.service';
import { Component, OnInit, OnChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

  @Input() count;
  constructor(private getPersons:HttpService) {
    console.log('constructor');
   }
  persons = [];
  countDup = 0;
  //life cycle hooks
  ngOnInit(): void {
    console.log('on init');
    //this.getPersons.getData().subscribe(data=>this.persons = data)
    
    //console.log(this.count.x);
  }
  ngOnChanges(changes):void{
    console.log('on change');
    //gives every change
    console.log(changes);
    //this.count['y'] = 15;
  }
  ngDoCheck():void {
    console.log('ng do check');
  }
  ngAfterContentInit():void{
    console.log('ng after content init');
  }
  ngAfterContentChecked():void{
    console.log('ng After ContentChecked');
  }
  ngOnDestroy():void {
    console.log('ng destroyed');
  }
  changeCount() {
    this.countDup = this.countDup+1;
  }

}
