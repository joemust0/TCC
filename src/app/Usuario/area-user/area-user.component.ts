import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicos/usuarios/usuario.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-area-user',
  templateUrl: './area-user.component.html',
  styleUrls: ['./area-user.component.css']
})
export class AreaUserComponent implements OnInit{
  usuario!:Usuario;

  constructor(private router:Router, private usuarioService: UsuarioService){}

  ngOnInit(): void {
    // this.usuario = this.usuarioService.getUsuarioLogado();
  }

  Edit(){

    return this.router.navigate(['/editUser']);
  }
}
