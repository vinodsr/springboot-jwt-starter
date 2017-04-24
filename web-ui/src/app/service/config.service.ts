import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

  private _api_url: string = '/api';

  private _user_url: string = this._api_url + '/user';

  private _whoami_url: string = this._user_url + '/whoami';


  get api_url(): string {
      return this._api_url;
  }

  get user_url(): string {
      return this._user_url;
  }

  get whoami_url(): string {
      return this._whoami_url;
  }

}
