import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot,
    
  // ):
  //   | boolean
  //   | UrlTree
  //   | Promise<boolean | UrlTree>
  //   | Observable<boolean | UrlTree> {
  //   return this.authService.user.pipe(
  //     take(1),
  //     map((user) => {
  //       const isAuth = !!user;
  //       if (isAuth) {
  //         return true
  //       } else {
  //         return this.state.createUrlTree(['/auth'])
  //       }
  //     })
  //   );
  // }
}
