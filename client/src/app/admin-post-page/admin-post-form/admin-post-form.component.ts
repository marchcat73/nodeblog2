import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MaterialService } from '../../shared/classes/material.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PostsServise } from '../../shared/services/posts.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Post } from '../../shared/interfaces';

@Component({
  selector: 'app-admin-post-form',
  templateUrl: './admin-post-form.component.html',
  styleUrls: ['./admin-post-form.component.css']
})
export class AdminPostFormComponent implements OnInit, AfterViewInit {
  @ViewChild('selectkat') selectkatRef: ElementRef;
  @ViewChild('input') inputRef: ElementRef;
  form: FormGroup;
  image: File;
  isNew = true;
  imagePreview: any = '';
  post: Post;



  constructor(private route: ActivatedRoute,
              private postsService: PostsServise) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required),
      list: new FormControl({})
    });

    this.form.disable();
    /*this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        // Мы редактируем форму
        this.isNew = false;
      }
    }); */
    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false;
              return this.postsService.getById(params['id']);
            }

            return of(null);
          }
        )
      )
      .subscribe(
        (post: Post) => {
          if (post) {
            this.post = post;
            this.form.patchValue({
              title: post.title,
              text: post.text,
              url: post.url,
              list: post.list
            });
            this.imagePreview = post.imageSrc;
            MaterialService.updateTextInputs();
          }
          this.form.enable();
        },
        error => MaterialService.toast(error.error.message)
      );
  }

  triggerClick() {
    this.inputRef.nativeElement.click();
  }

  ngAfterViewInit() {
    MaterialService.initFormSelect(this.selectkatRef);
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }

  onSumbit() {
    let obs$;
    this.form.disable();
    if (this.isNew) {
      // create
      obs$ = this.postsService.create(this.form.value.title, this.form.value.text, this.form.value.url,
      this.form.value.list, this.image);
    } else {
      // update
      obs$ = this.postsService.update(this.post._id, this.form.value.title, this.form.value.text, this.form.value.url,
        this.form.value.list, this.image);
    }

    obs$.subscribe(
      post => {
        this.post = post;
        MaterialService.toast('Данные отправлены');
        this.form.enable();
      },
      error => {
        MaterialService.toast(error.error.message);
        this.form.enable();
      }
    );
  }

}
