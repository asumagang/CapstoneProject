import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordsettingsRoutingModule } from './passwordsettings-routing.module';
import { PasswordsettingsComponent } from './passwordsettings.component';


@NgModule({
  declarations: [PasswordsettingsComponent],
  imports: [
    CommonModule,
    PasswordsettingsRoutingModule
  ]
})
export class PasswordsettingsModule { }
