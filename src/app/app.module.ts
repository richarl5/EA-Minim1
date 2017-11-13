import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/*Import app Components*/
import { ManagementComponent } from './components/management/management.component';
import { StudentComponent } from './components/student/student.component';
import { AppNavbar } from './shared/navbar/navbar.component'
import {SubjectComponent} from "./components/subject/subject.component";

@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    StudentComponent,
    SubjectComponent,
    AppNavbar
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppNavbar
  ]
})
export class AppModule { }
