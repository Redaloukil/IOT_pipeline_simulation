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
import { dashboardReducer } from 'src/state/reducers/dashboard.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from 'src/helpers/http-exception';
import { JwtInterceptor } from 'src/helpers/jwt-injector';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      app:appReducer
    }),
    StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide:  HTTP_INTERCEPTORS , useClass:JwtInterceptor, multi:true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
