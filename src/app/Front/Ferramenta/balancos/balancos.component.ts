import { Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-balancos',
  templateUrl: './balancos.component.html',
  styleUrls: ['./balancos.component.css']
})
export class BalancosComponent {
  @Input() lancamentosAtivoCirculante: any[] = [];
  @Input() lancamentosAtivoNCirculante: any[] = [];
  @Input() lancamentosPassivoCirculante: any[] = [];
  @Input() lancamentosPassivoNCirculante: any[] = [];
  @Input() lancamentosPatrimonioLiquido: any[] = [];
  @Input() lancamentos: any[] = [];

  nome: string = '';
  descricao: string = '';

  @ViewChild('btnNovo') oc!: ElementRef;
  @ViewChild('criarBalanco') ap!: ElementRef;

  constructor() {}

  newBalanco() {
    console.log("Nome: " + this.nome);
    console.log("Descrição: " + this.descricao);
  }

  nBalanco() {
    if (this.oc && this.ap) {
      this.oc.nativeElement.classList.add('ocultar');
      this.ap.nativeElement.classList.remove('ocultar');
    }
  }

  getTotalAtivos(): number {
    return (
      this.getAtivoCirculante() +
      this.getAtivoNCirculante()
    );
  }

  getTotalPassivos(): number {
    return (
      this.getPassivoCirculante() +
      this.getPassivoNCirculante() +
      this.getPatrimonioLiquido()
    );
  }

  // Lógica para calcular o balanço patrimonial
  private getAtivoCirculante(): number {
    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Caixa' || lanc.conta === 'Banco' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Caixa' || lanc.conta === 'Banco' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return debito - credito;
  }

  private getAtivoNCirculante(): number {
    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Imobilizado' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Imobilizado' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return debito - credito;
  }

  private getPassivoCirculante(): number {
    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return credito - debito;
  }

  private getPassivoNCirculante(): number {
    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return credito - debito;
  }

  private getPatrimonioLiquido(): number {
    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && lanc.conta === 'Capital Social')
      .reduce((acc, curr) => acc + curr.valor, 0);

    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && lanc.conta === 'Capital Social')
      .reduce((acc, curr) => acc + curr.valor, 0);

    return credito - debito;
  }
}
