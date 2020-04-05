import { Injectable } from "@angular/core";
import {
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

@Injectable({ providedIn: "root" })
export class Configuration {
  constructor() {}
  private horizontalPosition: MatSnackBarHorizontalPosition = "center";
  private verticalPosition: MatSnackBarVerticalPosition = "bottom";
  public getSnackBarConfig(): MatSnackBarConfig<any> {
    let snackBarConfig = new MatSnackBarConfig();
    snackBarConfig.verticalPosition = this.verticalPosition;
    snackBarConfig.horizontalPosition = this.horizontalPosition;
    snackBarConfig.duration = 5000;
    return snackBarConfig;
  }
}
