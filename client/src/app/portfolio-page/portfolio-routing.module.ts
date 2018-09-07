import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioPageComponent } from './portfolio-page.component';

const portfolioRoutes: Routes = [
  {path: '', component: PortfolioPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(portfolioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule {}
