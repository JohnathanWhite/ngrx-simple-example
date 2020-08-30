import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../store/index';
import {Observable} from 'rxjs';
import {INCREMENT} from '../store/app/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
    this.count$ = this.store
      .pipe(
        select(({app}) => app.count),
        );
  }

  increment(): void {
    this.store.dispatch(INCREMENT());
  }
}
