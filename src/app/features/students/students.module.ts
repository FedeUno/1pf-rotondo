import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import {StudentAddComponent} from './components/student-add/student-add.component';
import { StudentCrudComponent } from './components/student-crud/student-crud.component';
import { StudentsService } from './services/students.service';
import { DashboardStudentsComponent } from './components/dashboard-students/dashboard-students.component';
import { StudentsRoutingModule } from './students-routing.module';


@NgModule({
  declarations: [
    StudentAddComponent,
    StudentCrudComponent,   
    DashboardStudentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StudentsRoutingModule
     
  ],

  providers: [StudentsService ],
})
export class StudentsModule {}


