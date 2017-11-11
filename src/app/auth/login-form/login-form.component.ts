import { Component, OnInit } from '@angular/core';
import {LoginFrom} from "../models/login-from";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(user: LoginFrom) {
    this.router.navigate(['/main/fronts']);
  }

}
