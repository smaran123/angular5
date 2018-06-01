import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  age: number;
  fullName: string;
  status: boolean;
  email: any;

  ngOnInit() {
  	this.title = "Angular Practice";
  	this.age = 21;
  	this.fullName = "rajesh";
  	this.status = "true";
  	this.email = "smaranreddy123@gmail.com"
  }
}
