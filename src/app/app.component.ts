import { Component } from '@angular/core';
import { Product } from './entites/product.entity';

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
  result: string = "";

  products: Product[];

  ngOnInit() {
  	this.title = "Angular Practice";
  	this.age = 21;
  	this.fullName = "rajesh";
  	this.status = true;
  	this.email = "smaranreddy123@gmail.com"

  	this.products = [
  	{
  	  id:  1,
  	  name:  "ball",
  	  price:  87,
  	  quantity:  43
  	},
  	{
  	  id:  2,
  	  name:  "bat",
  	  price:  344,
  	  quantity:  39
  	},
  	{
  	  id:  3,
  	  name:  "wicket",
  	  price:  74,
  	  quantity:  3
  	}]
  }

  clickMe(){
   this.result = "Hello World";
  }
  
}
