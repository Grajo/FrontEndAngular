import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './features/components/calculator/calculator/calculator.component';

const routes: Routes = [
  {path: 'calculate', component: CalculatorComponent},
  {path: '', redirectTo: 'calculate', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
