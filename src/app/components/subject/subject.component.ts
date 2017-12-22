import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  private showTable : Boolean;
  subjects;
  error;

  constructor(private http: HttpClient) {
    this.showTable = false;
  }

  changeShowStatus(){
    this.showTable = !this.showTable;
  }

  ngOnInit(){
  }

  public allSubject() {
    this.http.get('http://localhost:3001/api/subject/all', {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(
      (data) => this.subjects = data, (err) => {this.error = err; alert("Subjects not found!")});
  }

  public addSubject(subject, student){
    this.changeShowStatus();
    this.http.put('http://localhost:3001/api/subject/' + subject + '/update/student', JSON.stringify({ student: student}), {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(
      (data) => {alert("Usuari matriculat"), this.allSubject();}, (err) => {this.error = err; alert("Failed to add student to subject")});
  }

  public nameSearch(data) {
    this.http.get('http://localhost:3001/api/subject/' + data + '/read', {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(
      (data) => this.subjects = data, (err) => {this.error = err; alert("No match found!")});
  }

  public studySearch(data) {
    this.http.get('http://localhost:3001/api/subject/search/study/' + data, {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(
      (data) => this.subjects = data, (err) => {this.error = err; alert("No match found!")});
  }

  public semesterSearch(data) {
    this.http.get('http://localhost:3001/api/subject/search/semester/' + data, {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(
      (data) => this.subjects = data, (err) => {this.error = err; alert("No match found!")});
  }

  public sortedSearch() {
    this.http.get('http://localhost:3001/api/subject/search/sorted', {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(
      (data) => this.subjects = data, (err) => {this.error = err; alert("No match found!")});
  }

}
