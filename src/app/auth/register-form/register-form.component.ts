import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {RegisterForm} from "../models/register-form";

@Component({
  selector: "register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createRegisterForm();
  }

  ngOnInit() {
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      userType: new FormControl("INDIVIDUAL", Validators.required),
      firstName: new FormControl("", Validators.required),
      middleName: new FormControl(""),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      busniessOrigin: new FormControl("", Validators.required),
      busniessEmail: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required)
    });
  }

  manageBusinessFileds(value) {
    if (value === "BUSINESS") {
      this.registerForm.addControl("busniessName", new FormControl("", Validators.required));
      this.registerForm.addControl("busniessWebsite", new FormControl(""));
      this.registerForm.addControl("userDesignation", new FormControl(""));
    } else {
      this.registerForm.removeControl("busniessName");
      this.registerForm.removeControl("busniessWebsite");
      this.registerForm.removeControl("userDesignation");
    }
  }

  register(user: RegisterForm) {
    console.log(user);
  }

}
