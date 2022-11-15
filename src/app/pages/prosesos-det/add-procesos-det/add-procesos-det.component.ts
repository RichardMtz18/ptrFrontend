import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-procesos-det',
  templateUrl: './add-procesos-det.component.html',
  //styleUrls: ['./acciones.component.css']
})
export class AddProcesosDetComponent implements OnInit {

  @Input() type:string = "Create"
  constructor() { }

  ngOnInit(): void {
  }

}
