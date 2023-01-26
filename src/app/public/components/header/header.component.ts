import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';

@Component({
  selector: 'header-publ',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public textSug: any[] = [];
  public formSeeker!: FormGroup
  public viewSug: boolean = false;
  public entitys: any[] = [];
  public config: IDropdownSettings = {
    idField: 'entidad',
    textField: 'etiqueta',
    enableCheckAll: false,
    singleSelection: true,
    closeDropDownOnSelection: true,
    noDataAvailablePlaceholderText: 'No resultados'
  }

  constructor(){
    this.createControls()
  }

  
  ngOnInit(): void {
    
  }
  
  public expandBar() {
   
  }

  public selectSug(ev: Event | any): void {
    
  }

  private createControls() {
    this.formSeeker = new FormBuilder().group({
      entity: [[]],
      query: ['']
    })
  }

  public searchText() {
    
  }

  public includeSearch(word: string): void {}

}
