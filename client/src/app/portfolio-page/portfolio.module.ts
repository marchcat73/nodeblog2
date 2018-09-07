import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './portfolio-page.component';
import { SharedModule } from '../shared/shared.module';
import { CarsRoutingModule } from './portfolio-routing.module';


@NgModule({
  declarations: [
    PortfolioPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarsRoutingModule
  ]
})
export class PortfolioModule {
}
