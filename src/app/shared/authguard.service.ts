import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';//import 'rxjs/add/operator/map';
import { take } from 'rxjs/operators';//import 'rxjs/add/operator/take';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth,
    private router: Router) {
    this.user = afAuth.authState;
  }

  user: Observable<firebase.User>;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    /* A)
    return this.user.map((auth) => {

        if (!auth) {
          this.router.navigateByUrl('/signin');
          return false;
        }
        return true;
      }).take(1) ;
    */

    /* B) */

    return this.user.pipe(map(auth => {

        if (!auth) {
          this.router.navigateByUrl('/signin');
          return false;
        }
        return true;
      })/*.take(1)*/);//

  }
}
