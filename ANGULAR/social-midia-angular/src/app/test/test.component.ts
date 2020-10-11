import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html' ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public username:string

  public isTrue:string="red"
  public isTrue1:boolean=false
  
  public myId:string="testId"
  public name:string ="Yash Garala"
  constructor() { }

  ngOnInit(): void {
  }
  public sayHello():string{
    return "YASH HELLO"
  }

  public titleStyles =
  {
    color: "gray",
    fontStyle : "italic"
  }
  public titleStyles1 =
  {
    color: "red",
    fontStyle : ""
  }
  public onSave(event):void
  {
    this.titleStyles=this.titleStyles1
    console.log(event )
  }
  onKeyUp(event)
  {
    // this.titleStyles=this.titleStyles1
    console.log(event.type)
    console.log(event.keyCode)
  }

}
