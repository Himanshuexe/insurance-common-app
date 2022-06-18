import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class LogoutService {

    constructor(private router: Router) { }

    logout() {
        localStorage.clear()
        this.router.navigateByUrl('app-home')
    }
}