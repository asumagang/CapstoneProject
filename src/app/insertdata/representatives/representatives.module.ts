import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentativesRoutingModule } from './representatives-routing.module';
import { RepresentativesComponent } from './representatives.component';


@NgModule({
  declarations: [RepresentativesComponent],
  imports: [
    CommonModule,
    RepresentativesRoutingModule
  ]
})
export class RepresentativesModule { }
