import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LancamentoDetalhe, PContas } from 'src/app/Lancamentos';


@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  private baseURL = 'http://localhost:3000/api/lancamentos';

  constructor(private http: HttpClient) {}

  adicionarLancamento(lancamento: LancamentoDetalhe): Observable<any> {
    return this.http.post<any>(`${this.baseURL}`, lancamento);
  }

  listarLancamentos(num_balanco: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${num_balanco}`);
  }

  buscarLancamentosNf(num_balanco: string, num_nf: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${num_balanco}/${num_nf}`);
  }

  atualizarLancamentos(num_balanco: string, num_nf: string, lancamento: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/${num_balanco}/${num_nf}`, lancamento);
  }

  apagarLancamento(num_balanco: string, num_nf: string): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/${num_balanco}/${num_nf}`);
  }

  apagarLancamentos(num_balanco: string): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/${num_balanco}`);
  }

  getPContas(): Observable<PContas[]> {
    return this.http.get<PContas[]>(`${this.baseURL}/pcontas`);
  }
}
