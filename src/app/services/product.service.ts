import { Injectable } from '@angular/core';
import { Product } from './entites/product.entity';

@Injectable()
export class ProductService {
	find(): Product {
	 return {
	  id: 'p01',
	  name: 'name1',
	  photo: 'thumb1.gif',
	  price: 20,
	  quantity: 5
	 };
	}

	findAll(): Products {
	 return [
	   {
	  id: 'p01',
	  name: 'name1',
	  photo: 'thumb1.gif',
	  price: 20,
	  quantity: 5
	 },
	 {
	  id: 'p02',
	  name: 'name2',
	  photo: 'thumb1.gif',
	  price: 30,
	  quantity: 4
	 },
	 {
	  id: 'p03',
	  name: 'name3',
	  photo: 'thumb1.gif',
	  price: 40,
	  quantity: 3
	 }
	 ];
	}
}