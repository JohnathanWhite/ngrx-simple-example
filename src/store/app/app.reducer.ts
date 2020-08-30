import {createReducer, on} from '@ngrx/store';
import {INCREMENT} from './app.actions';

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0
};

export const reducer = createReducer(
  initialState,
  on(INCREMENT, (state: State) => {
    return {...state, count: state.count + 1};
  })
);
