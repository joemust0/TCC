import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Servicos/usuarios/usuario.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit{

  usuario: Usuario = {
    Nome: '',
    Email: '',
    Nickname: '',
    Password: '',
    Resposavel: '',
    Instituicao: ''
  };
  editavel: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuario();
  }

  alterarCampo() {
    if (this.editavel) {
      this.usuarioService.atualizarUsuario(this.usuario);
      this.editavel = false;
    } else {
      this.editavel = true;
    }
  }

  ocultarCampo(){
    this.editavel = false;
  }
}

