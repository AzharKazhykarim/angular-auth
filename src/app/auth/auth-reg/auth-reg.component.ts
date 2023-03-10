import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-reg',
  templateUrl: './auth-reg.component.html',
  styleUrls: ['./auth-reg.component.css'],
})
export class AuthRegComponent {
  registerForm = new FormGroup({
    emailOrPhoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{11})+$/
      ),
    ]),
    password: new FormControl('', [Validators.pattern(/^.{8,32}$/)]),
  });
}
