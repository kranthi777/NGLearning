import { Injectable } from '@angular/core';

//tells angular this is service
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  printToConsole(data) {
    console.log(data);
  }
  getPersons() {
    return [
      {"name":"dsk","age":10},
      {"name":"dnk","age":20},
      {"name":"dsdsfdnk","age":30},
      {"name":"asdwask","age":50}]; 
  }
}

