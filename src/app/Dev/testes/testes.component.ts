import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent {
  @Input() lancamentos: any[] = [];
  @Input() tipoLancamento: string = '';

  adicionarLancamento(novoLancamento: any) {
    this.lancamentos.push(novoLancamento);
  }

}
