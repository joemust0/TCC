import { Component, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-balancos',
  templateUrl: './balancos.component.html',
  styleUrls: ['./balancos.component.css']
})
export class BalancosComponent {
  @ViewChild('btnNovo') oc!: ElementRef;
  @ViewChild('criarBalanco') ap!: ElementRef;

constructor() {}

  newBalanco() {

  const nameInput = <HTMLInputElement>document.getElementById("name");
  const descInput = <HTMLTextAreaElement>document.getElementById("description");

  const name = nameInput.value;
  const description = descInput.value;

  document.writeln("Nome: " + name);
  document.writeln("Descrição: " + description);
    }

    nBalanco(){
   this.oc.nativeElement.classList.add('ocultar')
   this.ap.nativeElement.classList.remove('ocultar')

    }

  }

