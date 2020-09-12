import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${BASE_URL}/posts`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${BASE_URL}/posts`, post );
  }

}
