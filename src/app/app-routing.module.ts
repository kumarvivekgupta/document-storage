import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MemberAuthGuard } from './core/services/login-route-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        m => m.LoginModule
      )
  },
  {
    path: 'sidenav', component: SidenavComponent,
    children: [
      {
        path: 'page-one',
        loadChildren: () =>
          import('./pages/page-one/page-one.module').then(
            m => m.PageOneModule
          )
      },
      {
        path: 'file-upload',
        canActivate: [MemberAuthGuard],
        loadChildren: () =>
          import('./pages/file-upload/file-upload.module').then(
            m => m.FileUploadoModule
          )
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
