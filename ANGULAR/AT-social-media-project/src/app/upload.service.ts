import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { map } from  'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  SERVER_URL:string="./user_post"
  constructor(private httpClient:HttpClient) { }
  public uplod(formData)
  {
    return this.httpClient.post<any>(this.SERVER_URL,formData,{
      reportProgress:true,
      observe:'events'
    } );  
  }
  
}
