import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './router-serializer.utils';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {appReducer} from '../state/reducers/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from 'src/helpers/http-exception';
import { JwtInterceptor } from 'src/helpers/jwt-injector';

import { CommonModule } from '@angular/common';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NavbarModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      app:appReducer
    }),
    BrowserAnimationsModule,
    // store currently not used 
    StoreDevtoolsModule.instrument({
            maxAge: 25, 
            logOnly: environment.production,
            autoPause: true, 
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS , useClass:JwtInterceptor, multi:true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
