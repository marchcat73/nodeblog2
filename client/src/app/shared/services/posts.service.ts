import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, Message } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsServise {
  constructor(private http: HttpClient) {
  }

  fetch(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/admin/post');
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`/api/admin/post/${id}`);
  }

  create(title: string, text: string, url: string, list?: any, image?: File): Observable<Post> {
    const fd = new FormData();

    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('title', title);
    fd.append('text', text);
    fd.append('url', url);
    fd.append('list', list);
    return this.http.post<Post>('/api/admin/post', fd);
  }

  update(id: string, title: string, text: string, url: string, list?: any, image?: File): Observable<Post> {
    const fd = new FormData();

    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('title', title);
    fd.append('text', text);
    fd.append('url', url);
    fd.append('list', list);
    return this.http.patch<Post>(`/api/admin/post/${id}`, fd);
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/admin/post/${id}`);
  }

}
