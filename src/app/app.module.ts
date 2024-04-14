import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Front/nav/nav.component';
import { HeaderComponent } from './Front/header/header.component';
import { FooterComponent } from './Front/footer/footer.component';
import { MainComponent } from './Front/main/main.component';
import { TestesComponent } from './Dev/testes/testes.component';
import { LancamentosComponent } from './Front/Ferramenta/lancamentos/lancamentos.component';
import { BalancosComponent } from './Front/Ferramenta/balancos/balancos.component';
import { MotorCalcComponent } from './Dev/motor-calc/motor-calc.component';
import { InfoLancamentoComponent } from './Front/Ferramenta/info-lancamento/info-lancamento.component';
import { LoginComponent } from './Usuario/login/login.component';
import { CadUsuarioComponent } from './Usuario/cad-usuario/cad-usuario.component';
import { AreaUserComponent } from './Usuario/area-user/area-user.component';
import { UserEditComponent } from './Front/Usuario/user-edit/user-edit.component';
import { TaskComponent } from './Front/ferramenta/task/task.component';
import { BalExtratoComponent } from './Front/ferramenta/bal-extrato/bal-extrato.component';
import { BalancoSheetTsComponent } from './Front/Ferramenta/balancos/balanco-sheet.ts/balanco-sheet.ts.component';
import { FormComponent } from './Front/ferramenta/form/form.component';
import { ExibirBalancoComponent } from './Front/ferramenta/exibir-balanco/exibir-balanco.component';
import { SharedTableService } from './Dev/processos/shared-tab.service';
import { BalancoSheetService } from './Servicos/balanco-sheet.service';
import { UsuarioService } from './Servicos/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TestesComponent,
    LancamentosComponent,
    BalancosComponent,
    MotorCalcComponent,
    InfoLancamentoComponent,
    LoginComponent,
    CadUsuarioComponent,
    AreaUserComponent,
    UserEditComponent,
    TaskComponent,
    BalExtratoComponent,
    BalancoSheetTsComponent,
    FormComponent,
    ExibirBalancoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [SharedTableService, BalancoSheetService, UsuarioService],
  bootstrap: [AppComponent, FormComponent]
})
export class AppModule { }
