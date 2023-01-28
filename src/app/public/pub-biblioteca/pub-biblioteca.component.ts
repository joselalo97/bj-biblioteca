import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParamsMarcador } from 'app/core/models/params.interface';
import { MarcadoresService } from 'app/services/marcadores.service';

@Component({
  selector: 'pub-biblioteca',
  templateUrl: './pub-biblioteca.component.html',
  styleUrls: ['./pub-biblioteca.component.scss']
})
export class PubBibliotecaComponent implements OnInit {


  @ViewChild('content',{ static: true }) private content: ElementRef<HTMLElement>

  margin: number;
  params: ParamsMarcador = {} as ParamsMarcador;
  formData: FormGroup

  constructor(private marcadoresService: MarcadoresService,
    private formBuilder: FormBuilder) {
    //modificar valores de usuario
    this.params.page = 0;
    this.params.size = 5;
    this.params.idUsuario = 'cmariscal';
    this.params.sort = 'nombre.keyword:asc';
    this.getDataMarcador()
    this.createForm()
   }

  ngOnInit(): void {
    this.margin = this.content.nativeElement.getBoundingClientRect().height + 40
  }

  getDataMarcador(){
    this.marcadoresService.getAllMarcadores(this.params).subscribe({
      next(value) {
        
      },
      error(err) {
        console.log("error");
      },
    })
  }

  createForm(){
    this.formData = this.formBuilder.group(
      {
        idUsuario: [''],
        sort: ['ASC'],
        size: [10],
        page: [0],
        query: ['']
      }
    )

    this.formData.controls['sort'].valueChanges.subscribe(data =>{
      if(data == 'ASC'){
        this.params.sort = 'nombre.keyword:nombre'
      }
    })

  }

  filterSearch(){
    console.log(this.formData.value);
  }

}
