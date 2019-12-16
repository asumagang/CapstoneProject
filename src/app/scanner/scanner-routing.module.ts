import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScannerComponent } from './scanner.component';
import { FilelistComponent } from './filelist/filelist.component';
import { ViewfileComponent } from './viewfile/viewfile.component';


const routes: Routes = [
  {
    path: '',component:ScannerComponent, children: [
      {
        path: 'filelist', component: FilelistComponent
      },
      {
        path:'viewfile', component: ViewfileComponent
      },
      {
        path: '', redirectTo: 'filelist', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScannerRoutingModule { }
