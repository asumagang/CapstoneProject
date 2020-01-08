import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ReportsComponent } from "./reports/reports.component";
import { ProfileComponent } from './profile/profile.component';
import { PasswordsettingsComponent } from './passwordsettings/passwordsettings.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  {
    path: "reports",
    component: ReportsComponent
  },
  {
    path: "manageusers",
    loadChildren: () =>
      import(`./manageusers/manageusers.module`).then(m => m.ManageusersModule)
  },
  {
    path: "scanner",
    loadChildren: () =>
      import(`./scanner/scanner.module`).then(m => m.ScannerModule)
  },
  {
    path: "insertdata",
    loadChildren: () =>
      import(`./insertdata/insertdata.module`).then(m => m.InsertdataModule)
  },
  {
    path:"profile",
    component: ProfileComponent
  },
  {
    path:"passwordsettings",
    component: PasswordsettingsComponent
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
