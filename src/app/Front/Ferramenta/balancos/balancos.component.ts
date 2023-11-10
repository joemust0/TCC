import { Component, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-balancos',
  templateUrl: './balancos.component.html',
  styleUrls: ['./balancos.component.css']
})
export class BalancosComponent implements AfterViewInit {

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
  @ViewChild('tabelaB') tabelaB!: ElementRef;

  // Adicione o serviço de roteamento no construtor
  constructor(private router: Router, private route:ActivatedRoute) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.atualizarVisibilidade();
    });
}

private atualizarVisibilidade() {
  if (this.oc && this.ap && this.tabelaB) {
    const urlAtual = this.router.url;

    if (urlAtual === '/balanço') {
      this.oc.nativeElement.classList.add('ocultar');
      this.ap.nativeElement.classList.add('ocultar');
      this.tabelaB.nativeElement.classList.remove('ocultar');
    } else {

    }
  }
}

  newBalanco() {
    console.log("Nome: " + this.nome);
    console.log("Descrição: " + this.descricao);

    // Envia os dados para a tela de lançamentos e navega para lá
    this.router.navigate(['/lançamentos'], {
      state: {
        nome: this.nome,
        descricao: this.descricao
      }
    });
  }

  nBalanco() {
    this.oc.nativeElement.classList.add('ocultar');
    this.ap.nativeElement.classList.remove('ocultar');
  }

  gerarBalanco() {
    if (this.oc && this.ap && this.tabelaB) {
      this.oc.nativeElement.classList.add('ocultar');//add balanço
      this.ap.nativeElement.classList.add('ocultar');//criar balanço
      this.tabelaB.nativeElement.classList.remove('ocultar');//tabela do balanço
    }
  }

  ngAfterViewInit(): void {
      this.atualizarVisibilidade();
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
