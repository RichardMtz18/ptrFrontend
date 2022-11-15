import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-objetos',
  templateUrl: './add-objetos.component.html',
  //styleUrls: ['./acciones.component.css']
})
export class AddObjetosComponent implements OnInit {

  @Input() type:string = "Create"
  constructor() { }

  ngOnInit(): void {
  }

}
