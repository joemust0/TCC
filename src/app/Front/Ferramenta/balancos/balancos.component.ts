import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BalancoSheet } from './balancoSheet';

@Component({
  selector: 'app-balancos',
  templateUrl: './balancos.component.html',
  styleUrls: ['./balancos.component.css']
})
export class BalancosComponent implements OnInit {
  balancoSheet!: BalancoSheet;
  lancamentosAtivoCirculante: any[] = [];
  lancamentosAtivoNCirculante: any[] = [];
  lancamentosPassivoCirculante: any[] = [];
  lancamentosPassivoNCirculante: any[] = [];
  lancamentosPatrimonioLiquido: any[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const state = navigation.extras.state as { balancoData: any };
      this.balancoSheet = state.balancoData;
      this.lancamentosAtivoCirculante = this.balancoSheet.lancamentosAtivoCirculante;
      this.lancamentosAtivoNCirculante = this.balancoSheet.lancamentosAtivoNCirculante;
      this.lancamentosPassivoCirculante = this.balancoSheet.lancamentosPassivoCirculante;
      this.lancamentosPassivoNCirculante = this.balancoSheet.lancamentosPassivoNCirculante;
      this.lancamentosPatrimonioLiquido = this.balancoSheet.lancamentosPatrimonioLiquido;
    }
  }

  ngOnInit(): void {}

  getTotalAtivoCirculante(): number {
    return this.lancamentosAtivoCirculante.reduce((total, ativo) => total + ativo.valor, 0);
  }

  getTotalAtivoNaoCirculante(): number {
    return this.lancamentosAtivoNCirculante.reduce((total, ativo) => total + ativo.valor, 0);
  }

  getTotalPassivoCirculante(): number {
    return this.lancamentosPassivoCirculante.reduce((total, passivo) => total + passivo.valor, 0);
  }

  getTotalPassivoNaoCirculante(): number {
    return this.lancamentosPassivoNCirculante.reduce((total, passivo) => total + passivo.valor, 0);
  }

  getTotalPatrimonioLiquido(): number {
    return this.lancamentosPatrimonioLiquido.reduce((total, patrimonio) => total + patrimonio.valor, 0);
  }

  getTotalAtivos(): number {
    return this.getTotalAtivoCirculante() + this.getTotalAtivoNaoCirculante();
  }

  getTotalPassivos(): number {
    return this.getTotalPassivoCirculante() + this.getTotalPassivoNaoCirculante() + this.getTotalPatrimonioLiquido();
  }
}
