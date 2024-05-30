export interface Usuario {
  id: (number|String);
  nome_completo: string;
  nickname?: string;
  email: string;
  senha: string;
  resposavel?: string;
  instituicao?: string;
}
