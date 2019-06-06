import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MixitupService } from '../shared/classes/mixitup.service';
import { PostsServise } from '../shared/services/posts.service';
import { Post } from '../shared/interfaces';
import { MaterialService, MaterialInstance } from '../shared/classes/material.service';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
declare let $: any;
/*declare let require: any;
const mixitup = require('mixitup');*/


@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() post: Post[];
  @ViewChild('portfoliogrid') portfoliogridRef: ElementRef;
  @ViewChild('modal') modalRef: ElementRef;
  posts: Post[] = [];
  selectedPost: Post;
  modal: MaterialInstance;
  aSub: Subscription;


  constructor(private postsService: PostsServise) { }

  ngOnInit() {
    this.aSub = this.postsService.fetch().subscribe(posts => {
      this.posts = posts;
    },
    error => MaterialService.toast(error.error.message),
    () => {
      MixitupService.initMixitup(this.portfoliogridRef);
    }
    );
  }

  ngOnDestroy() {
    this.modal.destroy();
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef);
    // MixitupService.initMixitup(this.portfoliogridRef);
   /* $(function () {
      const mixer = mixitup('#portfolio_grid');
    }); */
    $('.s_portfolio li').click(function() {
      $('.s_portfolio li').removeClass('active');
      $(this).addClass('active');
    });

  }

  selectPost(post: Post) {
    this.selectedPost = post;
    this.modal.open();
  }

  closeModal() {
    this.modal.close();
  }

}
