import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProjectToAddDto } from "src/app/dtos/projectToAddDto";

@Component({
  selector: "app-project-to-add-dialog",
  templateUrl: "./project-to-add-dialog.component.html",
  styleUrls: ["./project-to-add-dialog.component.scss"],
})
export class ProjectToAddDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectToAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public projectToAdd: ProjectToAddDto
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
