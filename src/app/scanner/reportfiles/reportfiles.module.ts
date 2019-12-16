import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportfilesRoutingModule } from './reportfiles-routing.module';
import { ReportfilesComponent } from './reportfiles.component';
import { ViewfileComponent } from './viewfile/viewfile.component';


@NgModule({
  declarations: [ReportfilesComponent, ViewfileComponent],
  imports: [
    CommonModule,
    ReportfilesRoutingModule
  ]
})
export class ReportfilesModule { }
