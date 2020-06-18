import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AuthGuard } from "./helpers/auth.guard";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { ProjectsPageComponent } from "./pages/projects-page/projects-page.component";
import { ForgotPasswordPageComponent } from "./pages/forgot-password-page/forgot-password-page.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { StatisticsPageComponent } from "./pages/statistics-page/statistics-page.component";

const routes: Routes = [
  {
    path: "projects",
    component: ProjectsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "statistics",
    component: StatisticsPageComponent,
    canActivate: [AuthGuard],
  },
  { path: "login", component: LoginPageComponent },
  { path: "register", component: RegisterPageComponent },
  { path: "forgot-password", component: ForgotPasswordPageComponent },
  { path: "", redirectTo: "/projects", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

export const appRoutingModule = RouterModule.forRoot(routes);
