import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfigModule } from './config.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './core/components/components.module';
import { InterceptorHttp } from './core/interceptor/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ConfigModule,
    ComponentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorHttp,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
