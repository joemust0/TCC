import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Front/main/main.component';
import { LancamentosComponent } from './Front/Ferramenta/lancamentos/lancamentos.component';
import { BalancosComponent } from './Front/Ferramenta/balancos/balancos.component';
import { LoginComponent } from './Usuario/login/login.component';
import { CadUsuarioComponent } from './Usuario/cad-usuario/cad-usuario.component';
import { AreaUserComponent } from './Usuario/area-user/area-user.component';
import { MotorCalcComponent } from './Dev/motor-calc/motor-calc.component';
import { TaskComponent } from './Front/Ferramenta/task/task.component';
import { EdicaoUserComponent } from './Usuario/edicao-user/edicao-user.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'lançamentos', component: LancamentosComponent},
  {path: 'balancos', component: BalancosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'calc', component: MotorCalcComponent},
  {path: 'cadUsuario', component: CadUsuarioComponent},
  {path: 'areaUser', component: AreaUserComponent},
  {path: 'editUser', component: EdicaoUserComponent },
  {path: 'task', component: TaskComponent },
  {path: '', redirectTo: '/balancos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
