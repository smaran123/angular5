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
  movieName: string = '';
  state: string = '';
  sportName: string;

  products: Product[];

  fileResult: string = '';

  ngOnInit() {
  	this.title = "Angular Practice";
  	this.age = 21;
  	this.fullName = "rajesh";
  	this.status = true;
  	this.email = "smaranreddy123@gmail.com"
  	this.sportName = "Hockey";

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

  changeMe(event: any) {
    this.movieName = event.target.value;
  }

  display(event: any) {
    this.state = event.target.value;
  }

  changeFileResult(event: any) {
  console.log(event)
  var selectedFile = event.target.files[0];
    this.fileResult = 'File Name:' + selectedFile.name;
    this.fileResult += '<br>file size(byte): ' + selectedFile.size;
    this.fileResult += '<br>File Type: ' + selectedFile.type;
  }

}
