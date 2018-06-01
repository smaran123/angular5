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

  product: Product;

  ngOnInit() {
  	this.title = "Angular Practice";
  	this.age = 21;
  	this.fullName = "rajesh";
  	this.status = true;
  	this.email = "smaranreddy123@gmail.com"

  	this.product = {
  	  id:  1,
  	  name:  "ball",
  	  price:  87,
  	  quantity:  43
  	};
  }
}
