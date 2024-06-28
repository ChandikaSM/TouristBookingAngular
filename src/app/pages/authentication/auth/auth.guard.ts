import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { AuthService } from "./auth.service";
import { state } from "@angular/animations";



@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor( private authService: AuthService, private router: Router){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | UrlTree {
        if(this.authService.isLoggedIn()){
            return true;
            
        } else {this.authService.redirectUrl = state.url;
            return this.router.createUrlTree(['/auth'], {queryParams: {returnUrl: state.url}});

            return false;
        }
        
    }
}