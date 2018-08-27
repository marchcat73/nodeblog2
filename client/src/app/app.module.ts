import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TokenInterceptor } from './shared/classes/token.interceptor';
import { AdminPostPageComponent } from './admin-post-page/admin-post-page.component';
import { AdminCategoriesPageComponent } from './admin-categories-page/admin-categories-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { AdminPostFormComponent } from './admin-post-page/admin-post-form/admin-post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CategoryPageComponent,
    PostPageComponent,
    PortfolioPageComponent,
    PricePageComponent,
    ContactPageComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    AdminPostPageComponent,
    AdminCategoriesPageComponent,
    LoaderComponent,
    AdminPostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
