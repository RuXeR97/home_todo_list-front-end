import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-forgot-password-page",
  templateUrl: "./forgot-password-page.component.html",
  styleUrls: ["./forgot-password-page.component.scss"],
})
export class ForgotPasswordPageComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  public isSubmitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ["", Validators.required],
    });
  }

  get formControls() {
    return this.forgotPasswordForm.controls;
  }

  public resetPassword() {
    this.isSubmitted = true;
  }
}
