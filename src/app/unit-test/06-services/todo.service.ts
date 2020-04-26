
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post<any[]>('...', todo)
  }

  getTodos() { 
    return this.http.get<any[]>('...');
  }

  delete(id) {
    return this.http.delete<any[]>('...');
  }
}