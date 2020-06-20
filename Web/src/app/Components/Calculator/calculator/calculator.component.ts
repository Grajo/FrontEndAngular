import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public amount: number;
  public tax: number;
  public result: number;
  public showResult: boolean;

  constructor() { }

  ngOnInit(): void {
    this.amount = 0;
    this.tax = 0;
    this.result = 0;
    this.showResult = false;
  }

  calculate() {
    this.result = this.amount + this.tax;
    this.showResult = true;
    //this.result to call the backend passing the specific data
  }

  reset() {
    this.ngOnInit();
  }

}
