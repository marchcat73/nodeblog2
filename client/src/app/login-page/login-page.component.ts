import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaterialService } from '../shared/classes/material.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  aSub: Subscription;

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        // Теперь вы можете зайти в систему используя свои данные
        MaterialService.toast(`Теперь вы можете зайти в систему используя свои данные.`);
      } else if (params['accessDenied']) {
        // Для начала авторизуйтесь в системе
        MaterialService.toast(`Для начала авторизуйтесь в системе.`);
      } else if (params['sessionFailed']) {
        MaterialService.toast(`Сессия истекла, авторизуйтесь снова.`);
      }
    });
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();

    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['admin/posts']),
      error => {
        MaterialService.toast(error.error.message);
        this.form.enable();
      }
    );
  }

}
