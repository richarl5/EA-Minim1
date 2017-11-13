import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students;
  subjects;
  error;

  constructor(private http: HttpClient) {}

  ngOnInit(){
  }

  public allStudents() {
    this.http.get('http://localhost:3001/api/student/all', {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(
      (data) => this.students = data, (err) => {this.error = err; alert("Students not found!")});
  }

  public oneStudent(student){
    this.http.get('http://localhost:3001/api/student/' + student + '/read', {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(
      (data) => this.students = data, (err) => {this.error = err; alert("Student not found!")});
  }
}
