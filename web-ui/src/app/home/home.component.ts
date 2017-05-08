import { Component, OnInit } from '@angular/core';
import {
  ConfigService,
  UserService
} from '../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  whoamIResponse = {};
  constructor(
    private config: ConfigService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  makeRequest(path) {
    if (path === this.config.whoami_url) {
      this.userService.getMyInfo()
      .subscribe(res => {
        this.forgeResonseObj(this.whoamIResponse, res, path);
      }, err => {
        this.forgeResonseObj(this.whoamIResponse, err);
      })
    }
  }

  forgeResonseObj(obj, res, path?) {
    if (path) {
      obj['path'] = path;
      obj['status'] = 200;
      obj['body'] = JSON.stringify(res, null, 2);
    } else {
      obj['path'] = JSON.parse(res._body).path;
      obj['status'] = res.status;
      obj['body'] = JSON.stringify(JSON.parse(res._body), null, 2);
    }
    obj['method'] = 'GET';
  }

}
