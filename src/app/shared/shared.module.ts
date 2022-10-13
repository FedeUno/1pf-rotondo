import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layouts/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

@NgModule({
  declarations: [
    FooterComponent,
    PageNotFoundComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [DashboardComponent, MaterialModule],
})
export class SharedModule {}
