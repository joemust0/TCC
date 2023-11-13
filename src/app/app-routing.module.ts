import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Front/main/main.component';
import { TestesComponent } from './Dev/testes/testes.component';
import { LancamentosComponent } from './Front/Ferramenta/lancamentos/lancamentos.component';
import { BalancosComponent } from './Front/Ferramenta/balancos/balancos.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'teste', component: TestesComponent},
  {path: 'lançamentos', component: LancamentosComponent},
  {path: 'balanços', component: BalancosComponent},
  { path: '', redirectTo: '/balanços', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
