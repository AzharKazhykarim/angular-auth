import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoading = false;

  loginForm = new FormGroup({
    emailOrPhoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{11})+$/
      ),
    ]),
    remember: new FormControl(false),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.isLoading = true;
    if (this.loginForm.invalid) {
      return;
    }
    const emailOrPhoneNumber = this.loginForm.value.emailOrPhoneNumber!;
    const password = this.loginForm.value.password!;
    this.isLoading = true;
    this.authService.login(emailOrPhoneNumber, password).subscribe({
      next: (res: any) => {
        console.log(res)
        this.isLoading = false;
        this.authService.onSaveToken(res.token);
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
      },
    });
    this.loginForm.reset();
  }
}
