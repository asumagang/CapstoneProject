import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScannerRoutingModule } from './scanner-routing.module';
import { ScannerComponent } from './scanner.component';
import { FilelistComponent } from './filelist/filelist.component';
import { ViewfileComponent } from './viewfile/viewfile.component';


@NgModule({
  declarations: [ScannerComponent, FilelistComponent, ViewfileComponent],
  imports: [
    CommonModule,
    ScannerRoutingModule
  ]
})
export class ScannerModule { }
