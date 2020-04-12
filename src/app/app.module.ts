import { HttpService } from './http.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
//import { AboutComponent } from './about/about.component';
import { FormsModule} from '@angular/forms';
//import { FavComponent } from './fav/fav.component';
import { EvenPipe} from '../pipe/even.pipe';
import { TodoComponent } from './todo/todo.component';
import { TestService } from './test.service';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenPipe,
    TodoComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TestService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
