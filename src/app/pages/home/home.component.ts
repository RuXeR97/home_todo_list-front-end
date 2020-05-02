import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { first } from "rxjs/operators";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/projects"]);
    }
  }

  ngOnInit() {
    this.loading = true;
    // this.userService
    //   .getAll()
    //   .pipe(first())
    //   .subscribe(users => {
    //     this.loading = false;
    //     this.users = users;
    //   });
  }
}
