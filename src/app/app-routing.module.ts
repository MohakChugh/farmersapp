import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CropfeedComponent } from './cropfeed/cropfeed.component';
import { CropProductComponent } from './crop-product/crop-product.component';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { BiddingComponent } from './crop-product/bidding/bidding.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component : LoginComponent },
  { path: 'login', component : LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'feed', component: CropfeedComponent, canActivate: [AuthGuard] },
  { path: 'cropproduct', component: CropProductComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: ShoppingcartComponent, canActivate: [AuthGuard] },
  { path: 'bidding', component: BiddingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
