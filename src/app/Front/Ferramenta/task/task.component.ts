import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  @Input() lancamentos: any[] = [];
  @Input() columnsToShow: string[] = [];
  @Input() tipoLancamento: string = '';

  constructor(){}

  ngOnInit(): void { }

}
