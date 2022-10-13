import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user';


export const loadUsers = createAction('[User List] Load Users');

export const loadedUsers = createAction(
  '[User List] Loaded Users',
  props<{ users: User[] }>()
);
