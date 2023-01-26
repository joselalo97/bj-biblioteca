import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'pub-biblioteca',
  templateUrl: './pub-biblioteca.component.html',
  styleUrls: ['./pub-biblioteca.component.scss']
})
export class PubBibliotecaComponent implements OnInit {


  @ViewChild('content',{ static: true }) private content: ElementRef<HTMLElement>

  margin: number

  constructor() { }

  ngOnInit(): void {
    this.margin = this.content.nativeElement.getBoundingClientRect().height + 40
  }

}
