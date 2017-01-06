import {Injectable} from '@angular/core'

@Injectable()
export class ConfigService {
  private _env = require('../../../.env');

  private recLookup(obj, path) {
    let parts = path.split(".");
    if (parts.length == 1) {
      return obj[parts[0]];
    }
    return this.recLookup(obj[parts[0]], parts.slice(1).join("."));
  }

  getEnv(path?: string, defaultValue?: any): any {
    if (path === undefined) {
      return this._env;
    }
    let result = this.recLookup(this._env, path);
    if (result === undefined) {
      result = defaultValue;
    }
    return result;
  }
}
