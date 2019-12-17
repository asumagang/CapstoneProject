import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScannerRoutingModule } from './scanner-routing.module';
import { ScannerComponent } from './scanner.component';
import { FilelistComponent } from './filelist/filelist.component';


@NgModule({
  declarations: [ScannerComponent, FilelistComponent],
  imports: [
    CommonModule,
    ScannerRoutingModule
  ]
})
export class ScannerModule { }
