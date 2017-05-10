import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

  private _api_url: string = '/api';

  private _user_url: string = this._api_url + '/user';

  private _whoami_url: string = this._user_url + '/whoami';

  private _users_url: string = this._user_url + '/all';

  private _login_url: string = this._api_url + '/login';

  private _logout_url: string = this._api_url + '/logout';

  private _foo_url: string = this._api_url + '/foo';

  get api_url(): string {
      return this._api_url;
  }

  get whoami_url(): string {
      return this._whoami_url;
  }

  get users_url(): string {
      return this._users_url;
  }

  get login_url(): string {
      return this._login_url;
  }

  get logout_url(): string {
      return this._logout_url;
  }

  get foo_url(): string {
      return this._foo_url;
  }


}
