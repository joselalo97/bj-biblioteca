import { Inject, Injectable } from '@angular/core';
import { StorageName } from 'app/core/constants/stora.enum';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root',
})

export class StorageService {
  constructor(
    @Inject(LOCAL_STORAGE)
    private localStorage: WebStorageService
  ) {}

  /**
   * @description
   *  Método para obtener el token del localstorage
   *
   * @returns: string
   */
  public getToken(): string {
    const token: string = this.localStorage.get(StorageName.Token);

    return token && JSON.parse(atob(token));
  }

  /**
   * @description
   *  Método para asignar el token al localstorage
   *
   * @param token: string
   */
  public setToken(token: string): void {
    this.localStorage.set(StorageName.Token, btoa(JSON.stringify(token)));
  }


  public verifyToken():boolean{
    
    const token = this.getToken()
    
    //service para consultar token valido
    
    return token ? true : false;
  }

}
