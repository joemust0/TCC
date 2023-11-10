import { Component } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent {
  lancamentos: any[] = [];
  tipoLancamento: string = '';

  adicionarLancamento(novoLancamento: any) {
    this.lancamentos.push(novoLancamento);
  }
}
