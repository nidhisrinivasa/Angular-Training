import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  template: `<h4>Third Works</h4>`,
  styles: [`h4{
      color: red;
  }`]
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
