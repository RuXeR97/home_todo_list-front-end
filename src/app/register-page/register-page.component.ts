import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { Configuration } from "../core/configuration";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"],
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;
  returnUrl = "";

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
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // convenience getter for easy access to form fields
  get formControls() {
    return this.registerForm.controls;
  }
  register() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.authenticationService
      .register(
        this.formControls.username.value,
        this.formControls.email.value,
        this.formControls.password.value
      )
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
          this.snackBar.open(
            "Registration went successfully",
            "OK",
            this.configuration.getSnackBarConfig()
          );
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
