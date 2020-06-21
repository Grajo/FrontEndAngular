import { Component, OnInit } from '@angular/core';
import { CalculationDetails } from 'src/app/core/models/calculationDetails';
import { CalculatorService } from 'src/app/core/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public calculationDetails: CalculationDetails | undefined;
  public amount: number;
  public tax: number;
  public showResult: boolean;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.amount = 0;
    this.tax = 0;
    this.showResult = false;
  }

  calculate() {
    this.calculatorService.getCalculation(this.amount, this.tax).subscribe(
      data => {
        this.calculationDetails = data;
        this.showResult = true;
      },
      error => { console.log('Error retrieving API data: ', error.message); }
    );
  }

  reset() {
    this.ngOnInit();
  }
}
