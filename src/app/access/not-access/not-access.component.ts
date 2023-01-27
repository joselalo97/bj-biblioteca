import { Component, OnInit } from '@angular/core';
import { tadaOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'not-access',
  templateUrl: './not-access.component.html',
  styleUrls: ['./not-access.component.scss'],
  animations: [
    tadaOnEnterAnimation(
      {
        anchor: 'fade',
        duration: 800,

      }
    )
  ]
})
export class NotAccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
