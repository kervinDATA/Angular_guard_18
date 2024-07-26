import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../core/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = this.userService.getRole();
    console.log('IsAdminGuard - User role:', role); // Debugging log

    if (role === 'ADMIN') {
      return true;
    } else {
      this.router.navigate(['/']); // Redirection en cas d'accès non autorisé
      return false;
    }
  }
}
