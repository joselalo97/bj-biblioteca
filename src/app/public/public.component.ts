import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInOnEnterAnimation, fadeInUpOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
  animations:[
    fadeInDownOnEnterAnimation(
      {
        anchor: 'down',
        duration: 800,
        delay: 200,
        translate: '10%'
      }
    ),
    fadeInUpOnEnterAnimation(
      {
        anchor: 'up',
        duration: 800,
        delay: 200,
        translate: '10%'
      }
    ),
      fadeInOnEnterAnimation(
        {
          anchor: 'fade',
          animateChildren: 'after',
          duration: 200,
        }
      )
  ]
})
export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
