import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {

  displayedColumns: string[] = ['position', 'name', 'src','action'];
  
  ELEMENT_DATA = [
    {position: 1, name: 'Dummy', src:'dummy'},
    {position: 2, name: 'SmallPdf', src: 'smallpdf'},
    {position: 3, name: 'UI-Developer', src: 'ui-developer'}
  ];
  dataSource = this.ELEMENT_DATA;

  constructor(private router:Router,private route:ActivatedRoute){}

  openPdfDetail(src:string){
    this.router.navigate(['details'],{queryParams:{src},relativeTo:this.route})
  }

}
