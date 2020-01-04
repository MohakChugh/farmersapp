import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CropfeedComponent } from './cropfeed/cropfeed.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CropProductComponent } from './crop-product/crop-product.component';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CropfeedComponent,
    FooterComponent,
    NavbarComponent,
    CropProductComponent,
    PaymentComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
