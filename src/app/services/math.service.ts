import  { Injectable } from '@angular/core';

@Injectable()
export class MathService {
	addition(a: number, b:number): number {
		return a + b;
	}
	subtraction(a: number, b:number): number {
		return a - b;
	}
	multiply(a: number, b:number): number {
		return a * b;
	}
}