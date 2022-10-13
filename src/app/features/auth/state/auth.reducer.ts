import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  activeSession: boolean; 
  activeUser?: User;
}

export const initialState: AuthState = {
  activeSession: false,
  activeUser: JSON.parse(localStorage.getItem('session')!)
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.loadSession, (state, { activeUser }) => {
    return {  ...state, activeSession: true , activeUser : activeUser };
  }),      

  on(AuthActions.logout, (state) => {
    return { ...state, activeSession: false , activeUser:undefined };
  })
);
