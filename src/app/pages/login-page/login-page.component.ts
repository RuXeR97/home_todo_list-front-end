import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { Configuration } from "../../core/configuration";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  returnUrl = "/projects";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private configuration: Configuration
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate([this.returnUrl]);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // convenience getter for easy access to form fields
  get formControls() {
    return this.loginForm.controls;
  }
  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService
      .login(this.formControls.username.value, this.formControls.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.snackBar.open(
            error,
            "OK",
            this.configuration.getSnackBarConfig()
          );
        }
      );
  }
}
