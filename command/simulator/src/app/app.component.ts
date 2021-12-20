import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { appLoading, appLoadingFailure, appLoadingSuccess } from 'src/state/actions/app.action';
import { getFeatureApp } from 'src/state/selectors/app.selector';
import { AppState } from 'src/state/types/state.model';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'simulator';
  
  stateSubscription = new Subscription();
  
  state:AppState = {
    loaded:false,
    loading:false,
    failed:false,
  };
  
  constructor(private appService:AppService, private store:Store<{app:AppState}>,private authService:AuthService){
      
  }
  
  ngOnInit():void{
    this.fetchStore().then(() => {
        this.store.dispatch(appLoading());
        this.appService.serverHandshake()
          .toPromise()
          .then(() => {
            this.store.dispatch(appLoadingSuccess());
          })
          .catch(() => {
            this.store.dispatch(appLoadingFailure());
          })
      }).catch(() => {
        this.store.dispatch(appLoadingFailure());
      })
  }

  fetchStore(){
      return this.store.select(getFeatureApp).toPromise().then((state) => {
        this.state = state;
      });
  }
}
