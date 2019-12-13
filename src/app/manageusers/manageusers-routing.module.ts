import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageusersComponent } from './manageusers.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path: '', component: ManageusersComponent, children: [
      {
        path: 'list', component: ListComponent
      },
      {
        path: 'add', component: AddComponent
      },
      { path: 'requests', loadChildren: () => import(`./requests/requests.module`).then(m => m.RequestsModule) },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageusersRoutingModule { }
