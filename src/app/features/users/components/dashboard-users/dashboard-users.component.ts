import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import { UserState } from 'src/app/core/models/user.state';
import { loadUsers } from '../../state/user.actions';
import { selectorLoadingUsers } from '../../state/user.selectors';







@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
})


export class DashboardUsersComponent implements OnInit {
  loading$!: Observable<boolean>;

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.loading$ = this.store.select(selectorLoadingUsers);
  }
}
