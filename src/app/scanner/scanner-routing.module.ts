import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScannerComponent } from './scanner.component';
import { FilelistComponent } from './filelist/filelist.component';



const routes: Routes = [
  {
    path: '',component:ScannerComponent, children: [
      {
        path: 'filelist', component: FilelistComponent
      },
      {
        path: "reportfiles",
        loadChildren: () =>
          import(`./reportfiles/reportfiles.module`).then(m => m.ReportfilesModule)
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
