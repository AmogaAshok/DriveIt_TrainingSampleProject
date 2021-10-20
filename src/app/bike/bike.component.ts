import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  Isdisabled1:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
