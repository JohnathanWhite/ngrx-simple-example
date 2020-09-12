import {createAction, props} from '@ngrx/store';
import {Post} from '../../models';

export const START_GET_POSTS = createAction('[APP] START_GET_POSTS');
export const SUCCESS_GET_POSTS = createAction('[APP] SUCCESS_GET_POSTS', props<{posts: Array<Post>}>());
export const FAILED_GET_POSTS = createAction('[APP] FAILED_GET_POSTS');
export const START_ADD_POST = createAction('[APP] START_ADD_POST', props<{post: Post}>());
export const SUCCESS_ADD_POST = createAction('[APP] SUCCESS_ADD_POST', props<{post: Post}>());
export const FAILED_ADD_POST = createAction('[APP] FAILED_ADD_POST');
