import { Component } from '@angular/core';
import { CalcExt } from './CalcExt';

@Component({
  selector: 'app-motor-calc',
  templateUrl: './motor-calc.component.html',
  styleUrls: ['./motor-calc.component.css']
})
export class MotorCalcComponent {
private calc: CalcExt;
resultados: number [] = [];

constructor() {
this.calc = new CalcExt();
}

executarCalculos(){
this.resultados =[];

this.calc.calculate(1, "+", 2);
this.resultados.push(this.calc.showValue());

this.calc.calculate(10, "-", 5);
this.resultados.push(this.calc.showValue());

this.calc.calculate(2, "*", 5);
this.resultados.push(this.calc.showValue());

this.calc.calculate(10, "/", 5);
this.resultados.push(this.calc.showValue());
}

}
