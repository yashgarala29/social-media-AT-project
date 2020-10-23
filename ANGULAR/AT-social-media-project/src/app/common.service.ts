import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class commonService {
  
  userpostUri:string = 'http://localhost:4000/user_post';
  userdetailUri:string = 'http://localhost:4000/user_detail';  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
//--------------------- user_detail----------------------------
  // Create
  createuser_detail(data): Observable<any> {
    let url = `${this.userdetailUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all user_details
  getuser_details() {
    console.log("this.http.get(`${this.userdetailUri}`)"+this.http.get(`${this.userdetailUri}`))
    return this.http.get(`${this.userdetailUri}`);
  }

  // Get user_detail
  getuser_detail(id): Observable<any> {
    let url = `${this.userdetailUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update user_detail
  updateuser_detail(id, data): Observable<any> {
    let url = `${this.userdetailUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete user_detail
  deleteuser_detail(id): Observable<any> {
    let url = `${this.userdetailUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }


  // --------------------user_post----------------------

  // Create
  createuser_post(data): Observable<any> {
    let url = `${this.userpostUri}/create`;
    return this.http.post(url,data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all user_posts
  getuser_posts() {
    return this.http.get(`${this.userpostUri}`);
  }

  // Get user_post
  getuser_post(id): Observable<any> {
    let url = `${this.userpostUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update user_detail
  updateuser_post(id, data): Observable<any> {
    let url = `${this.userpostUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete user_detail
  deleteuser_post(id): Observable<any> {
    let url = `${this.userpostUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }


  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // console.log(errorMessage);
    return throwError(errorMessage);
  }

}