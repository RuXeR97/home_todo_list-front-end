import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Project } from "../models/project";
import { map } from "rxjs/operators";
import { ProjectsPaged } from "../models/projectsPaged";

@Injectable({ providedIn: "root" })
export class ProjectService {
  private readonly projectControllerUrl = environment.apiUrl + "/projects";
  constructor(private http: HttpClient) {}

  getPaged(page: number, pageSize: number) {
    page++;
    let data = { page: page.toString(), pageSize: pageSize.toString() };

    return this.http.get<ProjectsPaged>(
      `${this.projectControllerUrl}/getprojectspaged`,
      {
        params: data,
      }
    );
  }

  getAll() {
    return this.http.get<Project[]>(this.projectControllerUrl);
  }

  addProject(projectToAdd: Project) {
    return this.http.post<any>(`${this.projectControllerUrl}/add`, {
      name: projectToAdd.name,
      description: projectToAdd.description,
      startDate: projectToAdd.startDate,
      finishDate: projectToAdd.finishDate,
    });
  }

  removeProject(projectToRemove: Project) {
    return this.http.delete<number>(
      `${this.projectControllerUrl}/${projectToRemove.id}`
    );
  }
}
