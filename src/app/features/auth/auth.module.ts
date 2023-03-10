import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthControlComponent } from './auth-control/auth-control.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegComponent } from './auth-reg/auth-reg.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AuthLoginComponent },
      { path: 'signup', component: AuthRegComponent },
    ]),
  ],
  declarations: [
    AuthComponent,
    AuthControlComponent,
    AuthLoginComponent,
    AuthRegComponent,
  ],
  exports: [
    AuthComponent,
    AuthControlComponent,
    AuthLoginComponent,
    AuthRegComponent,
  ],
})
export class AuthModule {}
