import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth-reg',
  templateUrl: './auth-reg.component.html',
  styleUrls: ['./auth-reg.component.scss'],
})
export class AuthRegComponent {
  constructor(private authService: AuthService) {}

  isLoading = false;

  registerForm = new FormGroup({
    emailOrPhoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{11})+$/
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^.{8,32}$/),
    ]),
  });

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    const emailOrPhoneNumber = this.registerForm.value.emailOrPhoneNumber!;
    const password = this.registerForm.value.password!;
    this.isLoading = true;
    this.authService.signup(emailOrPhoneNumber, password).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        console.log(res);
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
      },
    });
    this.registerForm.reset();
  }
}
