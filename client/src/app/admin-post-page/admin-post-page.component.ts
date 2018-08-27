import { Component, OnInit } from '@angular/core';
import { PostsServise } from '../shared/services/posts.service';
import { Post } from '../shared/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-post-page',
  templateUrl: './admin-post-page.component.html',
  styleUrls: ['./admin-post-page.component.css']
})
export class AdminPostPageComponent implements OnInit {

  posts$: Observable<Post[]>;
  constructor(private postsService: PostsServise) { }

  ngOnInit() {
    this.posts$ = this.postsService.fetch();
  }

}
