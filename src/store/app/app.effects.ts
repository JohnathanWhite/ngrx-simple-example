import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, catchError, switchMap} from 'rxjs/operators';
import {AppService} from '../../services/app.service';
import {
  START_GET_POSTS,
  SUCCESS_GET_POSTS,
  FAILED_GET_POSTS,
  START_ADD_POST,
  SUCCESS_ADD_POST,
  FAILED_ADD_POST
} from './app.actions';

@Injectable()
export class AppEffects {

  getPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(START_GET_POSTS),
      switchMap(() => this.appService.getPosts()
        .pipe(
          map((posts) => SUCCESS_GET_POSTS({posts})),
          catchError(() => FAILED_GET_POSTS)
        )
      )
    );
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(START_ADD_POST),
      switchMap((action) => this.appService.addPost(action.post)
        .pipe(
          map((post) => SUCCESS_ADD_POST({post})),
          catchError(() => FAILED_ADD_POST)
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {
  }
}
