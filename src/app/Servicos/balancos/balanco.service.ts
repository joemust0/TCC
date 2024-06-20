import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balanco } from 'src/app/Balanco';
import { BalancoSheet } from 'src/app/Front/Ferramenta/balancos/balancoSheet';
import { Lancamento, PContas } from 'src/app/Lancamentos';

@Injectable({
  providedIn: 'root'
})
export class BalancoService {

  private baseURL = 'http://localhost:3000/api/balancos';

  constructor(private http: HttpClient) { }

  criarBalanco(balancos: Balanco): Observable<any> {
    return this.http.post(`${this.baseURL}`, balancos);
  }

  listarBalancos(id_usuario: string): Observable<Balanco[]> {
    return this.http.get<Balanco[]>(`${this.baseURL}/${id_usuario}`);
  }

  buscarBalanco(id_usuario: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${id_usuario}`);
  }

  buscarBalancoAtiv(id_usuario: string, num_balanco: string): Observable<BalancoSheet> {
    return this.http.get<BalancoSheet>(`${this.baseURL}/balancos/${id_usuario}/${num_balanco}`);
  }

  atualizarBalanco(id_usuario: string, num_balanco: string, balanco: BalancoSheet): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/balancos/${id_usuario}/${num_balanco}`, balanco);
  }
  apagarBalanco(id_usuario: string, num_balanco: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id_usuario}/${num_balanco}`);
  }

  buscarLancamentos(num_balanco: number): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(`${this.baseURL}/${num_balanco}/lancamentos`);
  }

  salvarLancamentos(id_usuario: string, num_balanco: string, lancamentos: Lancamento[]): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/balancos/${id_usuario}/${num_balanco}/lancamentos`, lancamentos);
  }
  //busca nome contas
  buscarPContas(id_usuario: string, num_balanco: string): Observable<PContas[]> {
    return this.http.get<PContas[]>(`${this.baseURL}/balancos/${id_usuario}/${num_balanco}/pcontas`);
  }
}
