import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { EditUsersComponent } from './components/dialog/edit-user/edit-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { DeleteUserComponent } from './components/dialog/delete-user/delete-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { userFeatureKey, userReducer } from './state/user.reducer';
import { UsersRoutingModule } from './users-routing.module';
import { UsersEffects } from './state/user.effects';
import { UsersService } from 'src/app/services/users.service';

@NgModule({
  declarations: [
    DashboardUsersComponent,
    EditUsersComponent,
    ListUsersComponent,
    DeleteUserComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    StoreModule.forFeature(userFeatureKey, userReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forFeature([UsersEffects]),
  ],
  exports: [],

  providers: [UsersService],
})
export class UsersModule {}
