import { HttpService } from './http.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
//import { AboutComponent } from './about/about.component';
import { FormsModule} from '@angular/forms';
//import { FavComponent } from './fav/fav.component';
import { EvenPipe} from '../pipe/even.pipe';
import { TodoComponent } from './todo/todo.component';
import { TestService } from './test.service';
import { ListComponent } from './list/list.component';
import { FormsTdComponent } from './forms-td/forms-td.component';
import { HttpComponent } from './http/http.component';
import { LoggingInterceptorService } from './http/logging-interceptor.service';
import { AuthInterceptorService } from './http/auth-interceptor.service';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ShortenPipe } from './pipe/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EvenPipe,
    TodoComponent,
    ListComponent,
    FormsTdComponent,
    HttpComponent,
    PipeComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TestService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
