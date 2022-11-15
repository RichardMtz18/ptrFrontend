import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-dominios',
  templateUrl: './add-dominios.component.html',
  //styleUrls: ['./acciones.component.css']
})
export class AddDominiosComponent implements OnInit {

  @Input() type:string = "Create"
  constructor() { }

  ngOnInit(): void {
  }

}
