import { createAction, props } from '@ngrx/store';
import { User } from '../../../core/models/user';

export const loadSession = createAction(
  '[Auth] Load Sesion',
  props<{ activeUser: User }>()
);

export const logout = createAction('[Auth] Logout');
