import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
text:string;
  constructor() { 
    console.log("Accordion!");
    this.text = "Hello World";
  }

  ngOnInit() {}

}
