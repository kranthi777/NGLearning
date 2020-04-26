import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post<any[]>('...', todo);
  }

  getTodos() { 
    return this.http.get<any[]>('...');
  }

  getTodosPromise() {
    return this.http.get<any[]>('...').toPromise();
  }

  delete(id) {
    return this.http.delete<any[]>('...');
  }
}