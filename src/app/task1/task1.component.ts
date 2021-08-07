import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  template:`<div>
    Home
  </div>
  <div>Services <button (click)="services()">{{bt1}}</button></div>
  <div>Contact <button (click)="contact()">{{bt2}}</button></div>`,
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  bt1:String="Expand";
  bt2:String="Expand"
  constructor() { }
  services()
  {
    if(this.bt1==="Expand")
    {
      this.bt1="Hide";
    }
    else
    {
      this.bt1="Expand";
    }
  }
  contact()
  {
    if(this.bt2==="Expand")
    {
      this.bt2="Hide";
    }
    else
    {
      this.bt2="Expand";
    }
  }

  ngOnInit(): void {
  }

}
