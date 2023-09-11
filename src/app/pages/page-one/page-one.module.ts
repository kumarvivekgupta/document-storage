import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';
import {MatTableModule} from '@angular/material/table';
import { PdfViewerComponent } from './page-two/page-two.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [
    PageOneComponent,PdfViewerComponent
  ],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    MatTableModule,
    PdfViewerModule
  ]
})
export class PageOneModule { }
