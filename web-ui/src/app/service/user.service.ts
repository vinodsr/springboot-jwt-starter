import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
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

  login(user) {
    let body = `username=${user.username}&password=${user.password}`;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.apiService.post(this.config.login_url, body, headers);
  }

  logout() {
    return this.apiService.post(this.config.logout_url, {});
  }

}
