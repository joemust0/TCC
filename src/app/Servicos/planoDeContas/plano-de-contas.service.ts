import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PContas } from 'src/app/PlanoDeContas';

@Injectable({
  providedIn: 'root'
})
export class PlanoDeContasService {

pContasUrl = 'http://localhost:3000/api/pcontas';


  constructor(private http: HttpClient) { }
    ExibirPContas() {
      return this.http.get<any[]>(`${this.pContasUrl}`);
    }
  

}
