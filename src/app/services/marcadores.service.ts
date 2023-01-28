import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const apí = environment.urlServer

@Injectable({
  providedIn: 'root'
})
export class MarcadoresService {

  constructor(private http: HttpClient) { }

  public getAllMarcadores(data: any): Observable<any> {

    const { size, page, idUsuario, sort } = data

    const params = new HttpParams()
    .append('size', size)
    .append('page', page)
    .append('idUsuario', idUsuario)
    .append('sort', sort);


    return this.http.get<any>(`api/marcadores/marcador`, { params });
  }
}
