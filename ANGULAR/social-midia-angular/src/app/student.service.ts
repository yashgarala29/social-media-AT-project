import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public student_list:string[]=['yash','raajesh','mahes','xyz']
  constructor() { }
  getStudentsList():string[]{
    return this.student_list;
  }
}
