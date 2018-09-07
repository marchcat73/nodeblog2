import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
// import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { AuthGuard } from './shared/classes/auth.guard';
import { AdminPostPageComponent } from './admin-post-page/admin-post-page.component';
import { AdminCategoriesPageComponent } from './admin-categories-page/admin-categories-page.component';
import { AdminPostFormComponent } from './admin-post-page/admin-post-form/admin-post-form.component';

const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, children: [
      // {path: '', redirectTo: '', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'contact', component: ContactPageComponent},
      {path: 'portfolio', loadChildren: './portfolio-page/portfolio.module#PortfolioModule'},
      {path: 'price', component: PricePageComponent}
    ]
  },
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: 'admin', redirectTo: 'admin/login', pathMatch: 'full'},
      {path: 'admin/login', component: LoginPageComponent},
      {path: 'admin/register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: AdminLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'admin/posts', component: AdminPostPageComponent},
      {path: 'admin/posts/new', component: AdminPostFormComponent},
      {path: 'admin/posts/:id', component: AdminPostFormComponent},
      {path: 'admin/categories', component: AdminCategoriesPageComponent}
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
