import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/core/models/user.state';
import * as fromUser from './user.reducer';



export const selectorUsersState = createFeatureSelector<UserState>(
  fromUser.userFeatureKey
);

export const selectorLoadingUsers = createSelector(
  selectorUsersState,
  (state: UserState) => state.loading
);

export const selectorUserList = createSelector(
  selectorUsersState,
  (state: UserState) => state.users
);
