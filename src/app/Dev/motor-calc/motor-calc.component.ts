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
fristV: number =0;
lastV: number =0;

constructor() {
this.calc = new CalcExt();
}

executarCalculos(){
this.resultados =[];

this.calc.calculate(this.fristV, "+", this.lastV);
this.resultados.push(this.calc.showValue());

this.calc.calculate(this.fristV, "-", this.lastV);
this.resultados.push(this.calc.showValue());

this.calc.calculate(this.fristV, "*", this.lastV);
this.resultados.push(this.calc.showValue());

this.calc.calculate(this.fristV, "/", this.lastV);
this.resultados.push(this.calc.showValue());
}

}
