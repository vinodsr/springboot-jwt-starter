import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {

  currentUser;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }

  initUser() {
    let promise = this.apiService.anonGet(this.config.whoami_url).toPromise()
    .then(user => {
      this.currentUser = user;
      console.log(user);
    })
    .catch(() => null);
    return promise;
  }

  getUserInfo(): Observable<any> {
    return this.apiService.get(this.config.whoami_url);
  }
}
