export interface Lancamento {
id: number;
num_balanco: number;
num_nf: number;
serie_nf: number;
chave_nf: number;
data_criacao: Date;
data_entrada: Date;
c_debito: (String | null);
v_debito: (number | null);
c_credito: (String | null);
v_credito: (number | null);
id_plano_de_contas: number;
conta_analitica: String;
}