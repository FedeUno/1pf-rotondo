import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStudentsComponent } from './components/dashboard-students/dashboard-students.component';



const routes: Routes = [
  { path: '', 
    component:DashboardStudentsComponent, 
    children: [
      { path:'list', component: DashboardStudentsComponent },
      { path:'list', component: DashboardStudentsComponent },
      { path:'list', component: DashboardStudentsComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
