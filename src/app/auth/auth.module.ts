import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthControlComponent } from './auth-control/auth-control.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegComponent } from './auth-reg/auth-reg.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AuthControlComponent, AuthLoginComponent, AuthRegComponent],
})
export class AuthModule {}
