import { Injectable } from '@angular/core';
import { Lancamento } from 'src/app/Lancamentos';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  lancamentosURL = 'http://localhost:3000/api/lancamentos';

  constructor() { }
}
