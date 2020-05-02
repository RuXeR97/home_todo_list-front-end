import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { AuthGuard } from "./helpers/auth.guard";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { ProjectsPageComponent } from "./pages/projects-page/projects-page.component";

const routes: Routes = [
  {
    path: "projects",
    component: ProjectsPageComponent,
    canActivate: [AuthGuard],
  },
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginPageComponent },
  { path: "register", component: RegisterPageComponent },
  { path: "**", redirectTo: "" },
];

export const appRoutingModule = RouterModule.forRoot(routes);
