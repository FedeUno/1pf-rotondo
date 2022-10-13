import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { logout } from 'src/app/features/auth/state/auth.actions';
import { AuthState } from 'src/app/features/auth/state/auth.reducer';
import { AuthService } from 'src/app/services/auth.service';
import {
  selectActiveUSerState,
  selectUserAdminState,
  selectActiveSessionState,
} from '../../../features/auth/state/auth.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  activeUser$: Observable<User | undefined>;
  userAdmin$: Observable<boolean | undefined>;
  activeSession$: Observable<boolean | undefined>;

  datax: any;

  constructor(
    private router: Router,
    private store: Store<AuthState>,
    public authService: AuthService
  ) {
    this.activeUser$ = this.store.select(selectActiveUSerState);
    this.userAdmin$ = this.store.select(selectUserAdminState);
    this.activeSession$ = this.store.select(selectActiveSessionState);
  }

  logout() {
    localStorage.clear();
    this.store.dispatch(logout());
    this.router.navigate(['./login']);
  }
}
