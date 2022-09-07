import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

student: Student = new Student();
students: Student[] = [];

  constructor(public studentService: StudentService) { }
  
  updateStudent(){
    this.studentService.updateStudents(this.student).subscribe(
      (response :any) => {
        console.log(response);
      },
      function(error){
        console.log(error);
        alert("Something went wrong, Please try again!");
      }
    )
  }
  ngOnInit(): void {
  }

}
