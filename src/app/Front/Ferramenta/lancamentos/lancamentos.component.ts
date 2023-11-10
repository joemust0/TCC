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
      tipo: '',
      conta: '',
      valor: 0,
      funcaoCredito: false
    };

    this.camposDinamicos.push({ ...novoCampo });
  }

  adicionarLancamento() {
    // Lógica para validar contrapartida
       const totalCamposDinamicos = this.camposDinamicos.reduce((acc, campo) => {
      if (campo.funcaoCredito) {
        return acc + campo.valor;
      } else {
        return acc - campo.valor;
      }
    }, 0);

    const margemErro = 0.01; // Defina a margem de erro que faz sentido para o seu caso

    if (Math.abs(this.valor - (this.contrapartidaValor + totalCamposDinamicos)) > margemErro) {
      alert('A contrapartida deve ter o mesmo valor do lançamento.');
      return;
    }

    // Adicionando o novo lançamento à lista
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

    // Lógica para verificar a soma dos débitos e créditos
    const totalDebitos = this.lancamentos.reduce((acc, lancamento) => {
      if (lancamento.tipo === 'Débito') {
        return acc + lancamento.valor;
      } else {
        return acc;
      }
    }, 0);

    const totalCreditos = this.lancamentos.reduce((acc, lancamento) => {
      if (lancamento.tipo === 'Crédito') {
        return acc + lancamento.valor;
      } else {
        return acc;
      }
    }, 0);

    // Verificar se a soma dos débitos é diferente da soma dos créditos
    if (totalDebitos !== totalCreditos) {
      alert('Existem diferenças nos valores de débito e crédito. Confira os valores lançados!');
    }
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
