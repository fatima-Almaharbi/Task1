import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {


  public Students=[
    {"NAME": "Ahmed", "EMAIL":"ahmed@gmail.com","MARKS":55},
    {"NAME": "Saif", "EMAIL":"saif@gmail.com","MARKS":80},
    {"NAME": "Sara", "EMAIL":"sara@gmail.com","MARKS":65},
    {"NAME": "Nooh", "EMAIL":"nooh@gmail.com","MARKS":45},
    {"NAME": "Naser", "EMAIL":"naser@gmail.com","MARKS":37},
    {"NAME": "Amal", "EMAIL":"amal@gmail.com","MARKS":71},
  
  ]

}
