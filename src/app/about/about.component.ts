import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('viewChildInput') viewChildInput : ElementRef;

  constructor() { }

  ngOnInit(): void {
    //this.viewChildInput.nativeElement.value = "view child input";
  }
  name="kranthi"
  flag = false
  lastName="kumar"
  BackgroundRed= "myElement" 
  BackgroundPink = "otherElement"
  color = "blue"
  hideOrShow = true
  city = "Bengaluru"

  show(): void {
    console.log('button clicked');
    this.hideOrShow = !this.hideOrShow;
  }

  onInputClick(e) {
    console.log(e.value);
  }



}
