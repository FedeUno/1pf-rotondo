import { createReducer, on } from '@ngrx/store';
import { UserState } from 'src/app/core/models/user.state';
import * as UserActions from './user.actions';


export const userFeatureKey = 'users';

export const initialState: UserState= { 
  loading: false,
  users: []
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => {
    return { ...state, loading: true };
  }),
  on(UserActions.loadedUsers, (state, { users }) => {
    return { ...state, loading: false, users };
  })
);
