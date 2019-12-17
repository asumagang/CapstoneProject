import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewdataRoutingModule } from './viewdata-routing.module';
import { ViewdataComponent } from './viewdata.component';


@NgModule({
  declarations: [ViewdataComponent],
  imports: [
    CommonModule,
    ViewdataRoutingModule
  ]
})
export class ViewdataModule { }
