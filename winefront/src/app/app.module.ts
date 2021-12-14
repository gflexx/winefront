import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WinesComponent } from './wines/wines.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CrudService } from './crud.service';
import { HttpClientModule } from '@angular/common/http';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { WineEditComponent } from './wine-edit/wine-edit.component';
import { FormsModule } from '@angular/forms';
import { WineCreateComponent } from './wine-create/wine-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WinesComponent,
    CartComponent,
    CheckoutComponent,
    WineDetailComponent,
    ProfileComponent,
    WineEditComponent,
    WineCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
