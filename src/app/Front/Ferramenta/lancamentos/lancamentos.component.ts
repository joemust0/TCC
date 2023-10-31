import { Component } from '@angular/core';


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})

export class LancamentosComponent {

  newBalanco() {

  const nameInput = <HTMLInputElement>document.getElementById("name");
  const descInput = <HTMLTextAreaElement>document.getElementById("description");

  const name = nameInput.value;
  const description = descInput.value;

  document.writeln("Nome: " + name);
  document.writeln("Descrição: " + description);


    }

  }

