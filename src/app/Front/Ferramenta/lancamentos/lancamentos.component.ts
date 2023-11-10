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
  tipoLancamentoContrapartida: string = '';
  contrapartidaConta: string = '';
  contrapartidaValor: number = 0;

  adicionarCampo(tipo: string) {
    const novoCampo = {
      tipo: tipo === 'Débito' ? 'Débito' : 'Crédito',
      conta: '',
      valor: 0,
      numParcelas: 1
    };

    if (tipo === 'Débito') {
      this.lancamentos.push({ ...novoCampo, contrapartida: { tipo: 'Crédito', conta: '', valor: 0 } });
    } else if (tipo === 'Crédito') {
      this.lancamentos.push({ ...novoCampo, contrapartida: { tipo: 'Débito', conta: '', valor: 0 } });
    }
  }

  adicionarLancamento() {
    // Lógica para validar contrapartida
    if (this.valor !== this.contrapartidaValor) {
      alert('A contrapartida deve ter o mesmo valor do lançamento.');
      return;
    }

    const novoLancamento = {
      tipo: 'Débito',  // Definindo sempre como débito
      conta: this.conta,
      valor: this.valor,
      numParcelas: this.numParcelas,
      // Adicionando contrapartida ao lançamento
      contrapartida: {
        tipo: 'Crédito',  // Definindo sempre como crédito
        conta: this.contrapartidaConta,
        valor: this.contrapartidaValor
      }
    };

    // Lógica de validação da soma de débito e crédito
    const totalDebito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito')
      .reduce((acc, curr) => acc + Number(curr.valor), 0);

    const totalCredito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito')
      .reduce((acc, curr) => acc + Number(curr.valor), 0);

    if (totalDebito !== totalCredito) {
      alert('Existem diferenças nos valores de débito e crédito. Confira os valores lançados!');
      return; // Não adiciona o lançamento se a soma estiver errada
    }

    this.lancamentos.push({ ...novoLancamento }); // Criando uma cópia independente
    this.limparCampos(); // Limpar campos após adicionar
  }

  limparCampos() {
    this.tipoLancamento = '';
    this.conta = '';
    this.valor = 0;
    this.numParcelas = 1;
    this.tipoLancamentoContrapartida = '';
    this.contrapartidaConta = '';
    this.contrapartidaValor = 0;
  }

  adicionarCampoDebito() {
    const novoCampoDebito = {
      tipo: 'Débito',
      conta: '',
      valor: 0,
      numParcelas: 1,
      contrapartida: { tipo: 'Crédito', conta: '', valor: 0 }
    };
    this.lancamentos.push({ ...novoCampoDebito });
  }

  adicionarCampoCredito() {
    const novoCampoCredito = {
      tipo: 'Crédito',
      conta: '',
      valor: 0,
      numParcelas: 1,
      contrapartida: { tipo: 'Débito', conta: '', valor: 0 }
    };
    this.lancamentos.push({ ...novoCampoCredito });
  }


}
