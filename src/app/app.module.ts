import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { ToolbarComponent } from './components/layouts/toolbar/toolbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentCrudComponent } from './components/student/student-crud/student-crud.component';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TransformDirective } from './directives/transform.directive';
import { ConversorPipe } from './pipes/conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    FooterComponent,
    StudentListComponent,
    StudentCrudComponent,
    TransformDirective,
    ConversorPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
