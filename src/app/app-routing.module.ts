import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CropfeedComponent } from './cropfeed/cropfeed.component';

const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'feed', component: CropfeedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
