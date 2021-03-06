import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { WineCreateComponent } from './wine-create/wine-create.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineEditComponent } from './wine-edit/wine-edit.component';
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
    path: 'wines/create',
    component: WineCreateComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'wine/edit/:id',
    component: WineEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
