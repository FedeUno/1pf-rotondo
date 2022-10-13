import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardUsersComponent,
  },
  {
    path: 'add',
    component: AddUserComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class UsersRoutingModule {}