import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-record-acciones',
  templateUrl: './add-acciones.component.html',
  styleUrls: ['./add-acciones.component.css']
})
export class AddAccionesComponent implements OnInit {

  @Input() type:string = "Create"

  constructor() { }

  ngOnInit(): void {
  }

}
