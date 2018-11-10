import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Activation', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'Activation', loadChildren: './activation/activation.module#ActivationPageModule' },
  { path: 'OTPVerify/:phoneno', loadChildren: './otpverify/otpverify.module#OTPVerifyPageModule' },
  { path: 'Booking', loadChildren: './booking/booking.module#BookingPageModule' },
  { path: 'Confirm', loadChildren: './confirm/confirm.module#ConfirmPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
