
import { TestService } from './test.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //I need service.. so we need to pass arg of that service..
  //so that angular will give instance of that service
  private svc: TestService;
  constructor(svc: TestService, private http:HttpClient) {
    this.svc = svc;
    svc.printToConsole('hii to service');
  }

  ngOnInit() {
    //console.log("before API call");
    //let obs = this.http.get('https://api.github.com/users/kranthi777');
    //obs.subscribe((res)=>{
      //console.log(res);
      //console.log("after API success");
    //});
    //console.log("after API Done");
  }

  changeCount() {
    //console.log(this.passNumber);
    //this.passNumber['x'] = this.passNumber['x']+1;
    this.passNumber = this.passNumber+1;
  }
  title = 'kranthi';
  appData = {
    'name' : 'kranthi',
    'city': 'BLR'
  }
  message = ''
  passNumber = 1;
  //passNumber as object
  // passNumber = {
  //   "x":1,
  //   "y":2
  // }
}
