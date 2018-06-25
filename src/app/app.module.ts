import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MathService } from './services/math.service';
import { ProductService } from './services/product.service';
import { CalculatorService } from './services/calculator.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [MathService,ProductService,CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
