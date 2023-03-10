import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
})
export class AuthLoginComponent {
  loginForm = new FormGroup(
    {
      emailOrPhoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{11})+$/
        ),
      ]),
      password: new FormControl('', Validators.required),
    },
  );
}
