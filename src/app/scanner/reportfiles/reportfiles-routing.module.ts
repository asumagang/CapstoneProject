import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportfilesComponent } from './reportfiles.component';
import { ViewfileComponent } from './viewfile/viewfile.component';


const routes: Routes = [
  {
    path: '',component:ReportfilesComponent, children: [
      {
        path: 'reportfiles', component: ReportfilesComponent
      },
      {
        path: 'viewfiles', component: ViewfileComponent
      },
      {
        path: '', redirectTo: 'reportfiles', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportfilesRoutingModule { }
