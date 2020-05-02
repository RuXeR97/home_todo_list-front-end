import { Component, OnInit, ViewChild } from "@angular/core";
import { Project } from "../../models/project";
import { UserService } from "../../services/user.service";
import { ProjectService } from "../../services/project.service";
import { MatTableDataSource, MatTable } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: "app-projects-page",
  templateUrl: "./projects-page.component.html",
  styleUrls: ["./projects-page.component.scss"],
})
export class ProjectsPageComponent implements OnInit {
  private projects: Project[] = [];

  displayedColumns: string[] = ["name", "description", "startdate"];
  dataSource = new MatTableDataSource<Project>();
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private projectService: ProjectService) {
    projectService.getAll().subscribe((projects) => {
      this.projects = projects;
      this.dataSource.data = this.projects;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {}
}
