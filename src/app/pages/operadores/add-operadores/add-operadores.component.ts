import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-operadores',
  templateUrl: './add-operadores.component.html',
  styleUrls: ['./add-operadores.component.css']
})
export class AddOperadoresComponent implements OnInit {

  @Input() type:string = "Create";
  constructor() { }

  ngOnInit(): void {
  }

}
