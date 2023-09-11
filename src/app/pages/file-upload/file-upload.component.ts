import { HttpClient, HttpEventType } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Subscription, finalize } from "rxjs";

@Component({
    selector: 'file-upload',
    templateUrl: "file-upload.component.html",
    styleUrls: ["file-upload.component.scss"]
  })
  export class FileUploadComponent {
  
      @Input() requiredFileType:string='.pdf';
  
      fileName = '';
      uploadProgress:any;
      uploadSub?: Subscription;
  
      constructor(private http: HttpClient) {}
  
      onFileSelected(event) {
          const file:File = event.target.files[0];
                  
          if (file && (file.size/1024)<4096) {
              this.fileName = file.name;
              const formData = new FormData();
              formData.append("thumbnail", file);
  
              const upload$ = this.http.post("/api/thumbnail-upload", formData, {
                  reportProgress: true,
                  observe: 'events'
              })
              .pipe(
                  finalize(() => this.reset())
              );
            
              this.uploadSub = upload$.subscribe(event => {
                if (event.type == HttpEventType.UploadProgress) {
                  this.uploadProgress = Math.round(100 * (event.loaded / event.total));
                }
              })
            }else {
                alert("File size is too big. Upload file size less than 4mb.");
                this.reset();
            }
      }
  
    cancelUpload() {
      this.uploadSub.unsubscribe();
      this.reset();
    }
  
    reset() {
      this.uploadProgress = null;
      this.uploadSub = null;
    }
  }