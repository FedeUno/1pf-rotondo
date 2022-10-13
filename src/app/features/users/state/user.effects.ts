import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { loadedUsers, loadUsers } from './user.actions';



@Injectable()
export class UsersEffects {
  loadUsersEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.usersService
          .getUsers()
          .pipe(map((users) => loadedUsers({ users })))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}
