import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainPage',
  templateUrl: './mainPage.component.html',
  //styleUrls: ['./']
})
export class MainPageComponent implements OnInit {

  @Input() title:string = "";
  @Input() LinkAddNew:string = "";

  constructor() { }

  ngOnInit(): void {

  }

}
