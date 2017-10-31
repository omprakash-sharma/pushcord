import {Component, ComponentFactoryResolver, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormLoadDirective} from "./form-load.directive";
import {LoginFormComponent} from "../login-form/login-form.component";
import {RegisterFormComponent} from "../register-form/register-form.component";

@Component({
  selector: "login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  loginNavBarToggle: boolean;
  action: string;
  @ViewChild(FormLoadDirective) formLoad: FormLoadDirective;

  constructor(private route: ActivatedRoute, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(data => {
        this.action = data.action;
        switch (this.action) {
          case "LOGIN":
            const loginComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LoginFormComponent);
            this.formLoad.viewContainerRef.createComponent(loginComponentFactory);
            break;

          case "REGISTER":
            const registerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(RegisterFormComponent);
            this.formLoad.viewContainerRef.createComponent(registerComponentFactory);
            break;
        }
      });
  }

}
