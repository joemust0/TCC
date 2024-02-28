import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Front/main/main.component';
import { TestesComponent } from './Dev/testes/testes.component';
import { LancamentosComponent } from './Front/Ferramenta/lancamentos/lancamentos.component';
import { BalancosComponent } from './Front/Ferramenta/balancos/balancos.component';
import { LoginComponent } from './Front/login/login.component';
import { CadUsuarioComponent } from './Front/cad-usuario/cad-usuario.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'teste', component: TestesComponent},
  {path: 'lançamentos', component: LancamentosComponent},
  {path: 'balanços', component: BalancosComponent},
  {path: '', redirectTo: '/balanços', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'cadUsuario', component: CadUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
