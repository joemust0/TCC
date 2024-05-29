export interface Usuario {
  id: number;
  nomo_completo: string;
  nickname?: string;
  email: string;
  senha: string;
  resposavel?: string;
  instituicao?: string;
}
