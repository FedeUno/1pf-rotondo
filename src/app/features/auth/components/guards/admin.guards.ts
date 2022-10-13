import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/features/auth/state/auth.reducer';
import { selectActiveSessionState } from '../../state/auth.selectors';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanLoad {
  activeSession$: Observable<boolean | undefined>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<AuthState>
  ) {
    this.activeSession$ = this.store.select(selectActiveSessionState);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!localStorage.getItem('session')) {
      Swal.fire({
        icon: 'error',
        title: 'You must register',
        confirmButtonColor: '#0D47A1',
      });
      this.router.navigate(['login']);
      return false;
    }
    if (JSON.parse(localStorage.getItem('session')!).admin) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'The user does not have admin permissions',
        confirmButtonColor: '#0D47A1',
      });
      return false;
    }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!localStorage.getItem('session')) {
      Swal.fire({
        icon: 'error',
        title: 'You must register',
        confirmButtonColor: '#0D47A1',
      });
      this.router.navigate(['login']);
      return false;
    }
    if (JSON.parse(localStorage.getItem('session')!).admin) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'The user does not have admin permissions',
        confirmButtonColor: '#0D47A1',
      });
      return false;
    }
  }
}
