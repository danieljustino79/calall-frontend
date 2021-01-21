import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {TranslateUtil} from '../../shared/utils/translate-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  placeholderEmail = TranslateUtil.getMessage('form', 'placeholderEmail');
  labelPassword = TranslateUtil.getMessage('form', 'labelPassword');
  placeholderPassword = TranslateUtil.getMessage('form', 'placeholderPassword');
  titleFormLogin = TranslateUtil.getMessage('form', 'titleFormLogin');
  buttonAccess = TranslateUtil.getMessage('form', 'buttonAccess');
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  minlength = 3;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(this.minlength)])
    })
  }

  login({value, valid}){
    console.log('s:'+value.email)
  }

}
