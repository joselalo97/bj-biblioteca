import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'app/auth/services';
import { StorageService } from 'app/services/storage.service';
import { LOADER_SKIP } from '../models/loader-skip';

@Injectable()
export class InterceptorHttp implements HttpInterceptor {

  constructor(
    private readonly storageService: StorageService,
    private readonly authService: AuthService
  ) { }

  private countRequest: number = 0;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    const token = this.storageService.getToken() || null;


    let headers: { [name: string]: string | string[] } = {
      'accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'cache-control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'pragma': 'no-cache',
      'expires': '0'
    };

    (token)
      && (
        headers = {
          'Authorization': `Bearer ${token}`, ...headers
        }
      )

    request = request.clone({
      headers: new HttpHeaders(headers)
    });

    const showLoader: boolean = this.isLoaderSkip(request.url);

    return showLoader
      ? this.checkRequest(next, request)
      : next.handle(request).pipe(
        finalize(() => (
          this.countRequest--,
          this.countRequest === 0 && this.onEnd()
        )))
  }

  private isLoaderSkip(url: string): boolean {

    let flag: boolean = true;

    for (const skip of LOADER_SKIP) {

      if (new RegExp(skip).test(url)) { flag = false; break; }

    }

    return flag;

  }

  private checkRequest(
    next: HttpHandler,
    request: HttpRequest<any>
  ): Observable<HttpEvent<any>> {

    this.countRequest === 0 && this.onStart();

    this.countRequest++;

    return next.handle(request).pipe(
      finalize(() => (
        this.countRequest--,
        this.countRequest === 0 && this.onEnd()
      ))
    );

  }


  private onStart(): void { this.authService.showLoader(); }

  private onEnd(): void { this.authService.hideLoader(); }
}
