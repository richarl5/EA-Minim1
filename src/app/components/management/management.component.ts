import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  private showStudent : boolean;
  private showSubject : boolean;

  constructor(private http: HttpClient) {
    this.showStudent = true;
    this.showSubject = !this.showStudent;
  }

  ngOnInit() {
  }


  changeShowStatus(){
    this.showStudent = !this.showStudent;
    this.showSubject = !this.showSubject;
  }

  studentSubmit(name, age) {
    this.http.post('http://localhost:3001/api/student/add', JSON.stringify({ name: name, age: age}), {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .subscribe(data => {alert("Student added!")}, (err) => {alert("Student already exists!")});
  }


  subjectSubmit(name, course, semester) {
    this.http.post('http://localhost:3001/api/subject/add', JSON.stringify({ name: name, course: course, semester: semester}), {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .subscribe(data => {alert("Subject added success")}, (err) => {alert("Subject already exists")});
  }



}
