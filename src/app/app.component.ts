import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task1';

  public MyName="Fatima Al-Maharbi";
  displayVal:string="";

  getValue(val:string)
  {
    console.warn(val)
    this.displayVal=val;
  }
}
