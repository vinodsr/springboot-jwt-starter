import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

  private _whoami_url: string = environment.api_url + '/whoami';

  get whoami_url(): string {
      return this._whoami_url;
  }

}
