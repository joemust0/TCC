import { Component, ElementRef, OnInit, ViewChild, QueryList, ViewChildren, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LancamentoDetalhe, PContas } from 'src/app/Lancamentos';
import { PContasService } from 'src/app/Servicos/planoDeContas/plano-de-contas.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {
  tipos: string[] = [];
  periodo_cs: string[] = [];
  modelos: string[] = [];
  contas: string[] = [];
  camposDinamicos: any[] = [];
  lancamentos: LancamentoDetalhe[] = [];
  pContasList$!: Observable<PContas[]>;
  uniqueTipos: string[] = [];
  uniquePeriodos: string[] = [];
  uniqueModelos: string[] = [];
  uniqueContas: string[] = [];

  tiposd: string = '';
  periodo_csd: string = '';
  modelosd: string = '';
  contasd: string = '';
  valord: number = 0;

  tiposc: string = '';
  periodo_csc: string = '';
  modelosc: string = '';
  contasc: string = '';
  valorc: number = 0;

  tiposn: string = '';
  periodo_csn: string = '';
  modelosn: string = '';
  contasn: string = '';
  valorn: number = 0;

  num_nf!: string;
  serie_nf!: string;
  chave_nf!: string;
  dataCriacao!: string;
  dataEntrada!: string;
  mostrarBalanco: boolean = false;
  balanco: any;
  valor: any;

  @ViewChildren('apagarLinha') apagarLinha!: QueryList<ElementRef>;
  @Input() columnsToShow: string[] = [];
  @Input() lancamento: any[] = [];

  constructor(private pContasService: PContasService) {}

  ngOnInit() {
    this.buscarPContas();
  }

  buscarPContas() {
    this.pContasList$ = this.pContasService.buscarTodos();
    this.pContasList$.subscribe(
      data => {
        console.log('Dados recebidos:', data);
        this.uniqueTipos = [...new Set(data.map(pConta => pConta.tipo))];
        this.uniquePeriodos = [...new Set(data.map(pConta => pConta.periodo_c))];
        this.uniqueModelos = [...new Set(data.map(pConta => pConta.modelo))];
        this.uniqueContas = [...new Set(data.map(pConta => pConta.conta))];
      },
      error => console.error('Erro ao buscar PContas:', error)
    );
  }

  adicionarCampo() {
    this.camposDinamicos.push({ tiposn: '', periodo_cn: '', modelosn: '', contasn: '', valorn: 0, funcaoCredito: false });
  }

  adicionarLancamento() {
    // Calcula a soma dos débitos incluindo o campo de débito principal
    const somaDebitos = this.valord + this.camposDinamicos
      .filter(campo => !campo.funcaoCredito)
      .reduce((acc, campo) => acc + campo.valorn, 0);

    // Calcula a soma dos créditos incluindo o campo de crédito principal
    const somaCreditos = this.valorc + this.camposDinamicos
      .filter(campo => campo.funcaoCredito)
      .reduce((acc, campo) => acc + campo.valorn, 0);

    // Verifica se a soma dos débitos e créditos são iguais
    if (somaDebitos !== somaCreditos) {
      alert('A soma dos débitos deve ser igual à soma dos créditos.');
      return;
    }

    const novoLancamento: LancamentoDetalhe = {
      tipos: this.tiposd,
      periodo_cs: this.periodo_csd,
      modelo: this.modelosd,
      conta: this.contasd,
      valor: this.valord,
      contrapartida: this.tiposc,
      chave_nf: '',
      num_nf: '',
      serie_nf: '',
      data_criacao: '',
      data_entrada: '',
      periodoCredito: this.periodo_csc,
      debito: [{ c_debito: this.contasd, v_debito: this.valord }],
      credito: [{ c_credito: this.contasc, v_credito: this.valorc }],
      camposDinamicos: this.camposDinamicos,
      tipoCredito: this.tiposc
    };
    this.lancamentos.push(novoLancamento);
    this.limparCampos();
    }

  limparCampos() {
    this.tiposd = '';
    this.periodo_csd = '';
    this.modelosd = '';
    this.contasd = '';
    this.valord = 0;

    this.tiposc = '';
    this.periodo_csc = '';
    this.modelosc = '';
    this.contasc = '';
    this.valorc = 0;

    this.chave_nf = '';
    this.num_nf = '';
    this.serie_nf = '';
    this.dataCriacao = '';
    this.dataEntrada = '';

    this.camposDinamicos = [];
  }

  apagarLancamentos() {
    const apagarIndices = this.apagarLinha.toArray().map((element, index) => element.nativeElement.checked ? index : -1).filter(index => index !== -1);
    this.lancamentos = this.lancamentos.filter((_, index) => !apagarIndices.includes(index));
  }

  limparLancamentos() {
    this.lancamentos = [];
  }

  gerarBalanco() {
    this.mostrarBalanco = true;
  }
}
