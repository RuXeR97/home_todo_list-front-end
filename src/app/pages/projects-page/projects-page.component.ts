import { Component, OnInit, ViewChild } from "@angular/core";
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";
import { MatTableDataSource, MatTable } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { MatDialog } from "@angular/material/dialog";
import { ProjectToAddDialogComponent } from "src/app/components/project-to-add-dialog/project-to-add-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Configuration } from "src/app/core/configuration";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-projects-page",
  templateUrl: "./projects-page.component.html",
  styleUrls: ["./projects-page.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class ProjectsPageComponent implements OnInit {
  public displayedColumns: string[] = ["name", "creationDate", "actions"];
  public dataSource = new MatTableDataSource<Project>();
  public expandedElement: Project | null;
  public isLoading = true;

  private projects: Project[] = [];
  private projectToAdd: Project;

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private projectService: ProjectService,
    private snackBar: MatSnackBar,
    private configuration: Configuration
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.getAllProjects();
  }

  public openNewProjectDialog(): void {
    const dialogRef = this.dialog.open(ProjectToAddDialogComponent, {
      width: "250px",
      data: { projectToAdd: this.projectToAdd },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.projectService.addProject(result).subscribe(() => {
          this.getAllProjects();
          this.snackBar.open(
            "Project added successfully",
            "OK",
            this.configuration.getSnackBarConfig()
          );
        });
      }
    });
  }

  public removeProject(projectToRemove: Project) {
    this.projectService.removeProject(projectToRemove).subscribe(() => {
      this.getAllProjects();
      this.snackBar.open(
        "Project removed successfully",
        "OK",
        this.configuration.getSnackBarConfig()
      );
    });
  }

  public getAllProjects() {
    this.projectService.getAll().subscribe((projects) => {
      this.projects = projects;
      this.isLoading = false;

      this.dataSource.data = this.projects;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
