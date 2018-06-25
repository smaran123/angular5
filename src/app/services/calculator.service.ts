import { Injectable } from '@angular/core';
import { MathService } from './math.service';
@Injectable()

export class CalculatorService {
	constructor(
	 private mathService: MathService) {}
	 
	 square(a: number): number {
	 	return this.mathService.multiply(a,a);
	 }

	 cube(a: number): number {
	 	return this.mathService.multiply(a, this.mathService.multiply(a,a));
	 }

}