import {createReducer, on} from '@ngrx/store';
import {SUCCESS_ADD_POST, SUCCESS_GET_POSTS} from './app.actions';
import {Post} from '../../models';

export interface State {
  posts: Array<Post>;
}

export const initialState: State = {
  posts: null
};

export const reducer = createReducer(
  initialState,
  on(SUCCESS_GET_POSTS, (state: State, {posts}) => {
    return {...state, posts};
  }),
  on(SUCCESS_ADD_POST, (state: State, {post}) => {
    return {...state, posts: [...state.posts, post]};
  }),
);
