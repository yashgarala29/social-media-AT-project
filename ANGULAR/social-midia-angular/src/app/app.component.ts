import { Component, OnInit } from '@angular/core';
import{ StudentService } from './student.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public student_list:string[]
  constructor(private studentSerivice:StudentService)
  {

  }
  ngOnInit()
  {
    this.student_list=this.studentSerivice.getStudentsList();
  }
  // ngOnInite(){
  //   this.student_list=this.studentSerivice.getStudentsList();
  // }
  // title = 'social-midia-angular';
}

