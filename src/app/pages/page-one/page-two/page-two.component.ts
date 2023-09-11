import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector:'app-pad-viewer',
  templateUrl:'./page-two.component.html',
  styleUrls:['./page-two.component.scss']
})
export class PdfViewerComponent implements OnInit {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe((res)=>{
      if(!!res['src']){
        //Implement a route resolver to fetch document data before navigating to the document details page.
        this.src='../../../assets/pdfs/'+res['src']+'.pdf';
      }
    })
    
  }
}