import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WinesComponent } from './wines/wines.component';

const routes: Routes = [
  {
    path: '',
    component: WinesComponent
  },
  {
    path: 'wine/:id',
    component: WineDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
