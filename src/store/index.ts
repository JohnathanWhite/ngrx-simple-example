import * as fromApp from './app/app.reducer';
import {ActionReducerMap} from '@ngrx/store';


// aggregating all stores together
export interface State {
  app: fromApp.State;
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer
};
