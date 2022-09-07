import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:7000/api/studentmanagement/student";
const GET_URL = "http://localhost:7000/api/studentmanagement/allstudents";
const DELETE_URL = "http://localhost:7000/api/studentmanagement/allstudents";
const UPDATE_URL = "http://localhost:7000/api/studentmanagement/update?sId";

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  createStudent(Student: {firstName:string;lastName:string;studentClass:string;subject:string;dob:Date}){
    return this.http.post(BASE_URL, Student);
  }

  getStudents() {
    return this.http.get(GET_URL);
  }
  constructor(public http : HttpClient) {}

  deleteStudent(student:any) {
    return this.http.delete(DELETE_URL);
  }

  updateStudents(student:any) {
    return this.http.put(UPDATE_URL, student.sId);
   
}
}