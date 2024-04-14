import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedTableService } from 'src/app/Dev/processos/shared-tab.service';

@Component({
  selector: 'app-bal-extrato',
  templateUrl: './bal-extrato.component.html',
  styleUrls: ['./bal-extrato.component.css']
})
export class BalExtratoComponent implements OnInit, OnDestroy {
  tabelaEspelhada: any[] = [];
  tabelaEspelhadaSubscription: Subscription = new Subscription();
  tipoEntrada: string = '';
  entrada: string = '';


  constructor(private sharedTableService: SharedTableService) {}

  ngOnInit() {
    this.tabelaEspelhada = this.sharedTableService.obterTabelaEspelhada();
    this.tabelaEspelhadaSubscription = this.sharedTableService.tabelaEspelhadaSubject.subscribe((tabela: any[]) => {
      this.tabelaEspelhada = tabela;
      this.tabelaEspelhada = this.sharedTableService.obterTabelaOriginal();
    });
  }

  ngOnDestroy() {
    this.tabelaEspelhadaSubscription.unsubscribe();
  }
}
