import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CropfeedComponent } from './cropfeed/cropfeed.component';
import { CropProductComponent } from './crop-product/crop-product.component';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'feed', component: CropfeedComponent },
  { path: 'cropproduct', component: CropProductComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'cart', component: ShoppingcartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
