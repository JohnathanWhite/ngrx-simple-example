import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store/index';
import {START_ADD_POST, START_GET_POSTS} from '../store/app/app.actions';
import {Observable} from 'rxjs';
import {Post} from '../models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts$: Observable<Array<Post>>;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(START_GET_POSTS());
    this.posts$ = this.store.select(({app}) => app.posts);
  }

  addPost(): void {
    const post: Post = {
      userId: 1,
      id: 5,
      title: 'test',
      body: 'test'
    };
    this.store.dispatch(START_ADD_POST({post}));
  }

}
