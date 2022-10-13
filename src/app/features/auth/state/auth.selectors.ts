import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

export const selectActiveSessionState = createSelector(
  selectAuthState,
  (state: fromAuth.AuthState) => state.activeSession
);

export const selectActiveUSerState = createSelector(
  selectAuthState,
  (state: fromAuth.AuthState) => state.activeUser
);

export const selectUserAdminState = createSelector(
  selectAuthState,
  (state: fromAuth.AuthState) => state.activeUser?.admin
);
