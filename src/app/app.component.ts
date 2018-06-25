import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './services/product.service';
import { Product } from './entites/product.entity';
import { Account } from './entites/account.entity';
import { MathService } from "./services/math.service";
import { max } from './validators/max.validator';
import { min } from './validators/min.validator';


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

  product: Product;

  products: Product[];

  fileResult: string = '';
  filesResult: string = '';

  genders: any;
  roles: any;
  languages: any;
  registerForm: FormGroup;
  checkedList: string[];
  certificates: any;

  result1: number;
  result2: number;
  result3: number;

  ngOnInit() {
    this.result1 = this.mathService.addition(10,20);
    this.result2 = this.mathService.subtraction(20,23);
    this.result3 = this.mathService.multiply(3,2);
    this.product = this.productService.find();
    this.products = this.productService.findAll();
  	this.title = "Angular Practice";
  	this.age = 21;
  	this.fullName = "rajesh";
  	this.status = true;
  	this.email = "smaranreddy123@gmail.com"
  	this.sportName = "Hockey";
    this.checkedList = [];
    this.certificates = [
      {value: 'cer1', display: 'Certificate 1'},
      {value: 'cer2', display: 'Certificate 2'},
      {value: 'cer3', display: 'Certificate 3'},
      {value: 'cer4', display: 'Certificate 4'},
      {value: 'cer5', display: 'Certificate 5'}
    ];
    this.genders = [
      {value: 'F', display: 'Female'},
      {value: 'M', display: 'Male'}
    ];
    this.roles = [
      {id: 'r1', name: 'Role 1'},
      {id: 'r2', name: 'Role 2'},
      {id: 'r3', name: 'Role 3'},
      {id: 'r4', name: 'Role 4'}
    ];
    this.languages = [
      {id: 'lang1', name: 'Language 1'},
      {id: 'lang2', name: 'Language 2'},
      {id: 'lang3', name: 'Language 3'},
      {id: 'lang4', name: 'Language 4'},
      {id: 'lang5', name: 'Language 5'}
    ];

    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z)(?=.*[@#$%]).{6,20})$')]],
      email: ['', [Validators.required, Validators.pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)]],
      age: [0, [min(18),max(100)]],
      description: '',
      status: true,
      gender: this.genders[0].value,
      languages: [],
      role: [],
      certificates: []
    });

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

  changeFilesResult(event: any) {
   console.log(event);
   var selectedFiles = event.target.files;
   for (var i = 0; i < selectedFiles.length; i++ ) {
     this.filesResult +=  'FileName: ' + selectedFiles[i].name;
     this.filesResult += '<br>File Size(byte): ' + selectedFiles[i].size;
     this.filesResult += '<br>File Type: ' + selectedFiles[i].type;
   }
   
  }

  constructor(private formBuilder: FormBuilder,
              private mathService: MathService,
              private productService: ProductService,) {

  }

  save() {
   let account: Account = this.registerForm.value;
   account.languages = this.checkedList;
   this.displayAccountInfoConsole(account);
  }

  displayAccountInfoConsole(account: Account) {
    console.log('UserName: ' + account.userName);
    console.log('Password: ' + account.password);
    console.log('Description ' + account.description);
    console.log('Gender: ' + account.gender);
    console.log('status: ' + account.status);
    console.log('Language List');
    for (var i = 0; i < account.languages.length; i++) {
      console.log(account.languages[i]);
    }
    console.log('Role: '+ account.role);
    console.log('certificates List');
    for (var i = 0; i < account.certificates.length; i++) {
      console.log(account.certificates[i]);
    }
  }

  onCheckboxChange(option, event) {
    if(event.target.checked){
     this.checkedList.push(option.id);
    } else {
     for(var i = 0; i < this.languages.length; i++) {
     if (this.checkedList[i] == option.id) {
      this.checkedList.splice(i,1);
     }
     }
    }
  }

}
