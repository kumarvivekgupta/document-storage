import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one.component';
import { PdfViewerComponent } from './page-two/page-two.component';

const routes: Routes = [{
  path: '', component: PageOneComponent
}, { path: 'details', component: PdfViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageOneRoutingModule { }
