import { Http, Headers, Response, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  csrfToken: string;
  headers = new Headers({
    'Accept': 'application/json'
  });

  constructor(
    private http: Http
  ) {
  }

  anonGet(path: string): Observable<any> {
    return this.http.get(
      path,
      {
        headers: this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData)
    .catch(this.handleError);
  }

  get(path: string): Observable<any> {
    return this.http.get(
      path,
      {
        headers: this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData)
    .catch(this.checkIdp.bind(this));
  }

  post(path: string, body, put?): Observable<any> {
    return this.http.request(
      path,
      {
        method: put ? RequestMethod.Put : RequestMethod.Post,
        body: JSON.stringify(body),
        headers: this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData)
    .catch(this.checkIdp.bind(this));
  }

  put(path: string, body: any): Observable<any> {
    return this.post(path, body, true);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  // Display error if logged in, otherwise redirect to IDP
  private checkIdp(error: any) {
    if (error && error.status === 401) {
      // this.redirectIfUnauth(error);
    } else {
      // this.displayError(error);
    }
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(error); // log to console instead
    return Observable.throw(error);
  }
}
