import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent {
  tiposLancamento = ["Ativo", "Passivo", "Ativo não Circulante", "Passivo não Circulante", "Patrimônio Líquido"];
  contas = ["Caixa", "Banco", "Imobilizado", "Estoque", "Fornecedor", "Empréstimo", "Capital Social"];
  lancamentos: any[] = [];
  tipoLancamento: string = '';
  conta: string = '';
  valor: number = 0;
  numParcelas: number = 1;

  // Adicionando as propriedades de contrapartida
  tipoLancamentoContrapartida: string = '';
  contrapartidaConta: string = '';
  contrapartidaValor: number = 0;

  // Modelo de dados para os campos dinâmicos
  camposDinamicos: any[] = [];

  // Adicionando a função para adicionar mais itens
  adicionarCampo() {
    const novoCampo = {
      tipoLancamentoNCampo: '',
      nCampoConta: '',
      nCampoValor: 0
    };

    this.camposDinamicos.push({ ...novoCampo }); // Criando uma cópia independente
  }

  adicionarLancamento() {
    // Lógica para validar contrapartida
    if (this.valor !== this.contrapartidaValor) {
      alert('A contrapartida deve ter o mesmo valor do lançamento.');
      return;
    }

    // Lógica para adicionar os campos dinâmicos à lista de lançamentos
    const novoLancamento = {
      tipo: 'Débito',  // Definindo sempre como débito
      conta: this.conta,
      valor: this.valor,
      numParcelas: this.numParcelas,
      contrapartida: {
        tipo: 'Crédito',  // Definindo sempre como crédito
        conta: this.contrapartidaConta,
        valor: this.contrapartidaValor
      },
      camposDinamicos: [...this.camposDinamicos]  // Adicionando campos dinâmicos
    };

    // Adicionando o novo lançamento à lista
    this.lancamentos.push({ ...novoLancamento });

    // Limpar campos após adicionar
    this.limparCampos();
  }

  limparCampos() {
    this.tipoLancamento = '';
    this.conta = '';
    this.valor = 0;
    this.numParcelas = 1;

    // Limpar campos de contrapartida
    this.tipoLancamentoContrapartida = '';
    this.contrapartidaConta = '';
    this.contrapartidaValor = 0;

    // Limpar campos dinâmicos
    this.camposDinamicos = [];
  }
}
