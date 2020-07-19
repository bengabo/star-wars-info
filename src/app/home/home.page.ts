import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public testData = [ 
    {
      name: 'Luke Skywalker',
    },
    {
      name: 'R2-D2'
    }
  ];

  constructor() {}

}
