import {Injectable} from '@angular/core'


@Injectable()
export class ConfigService {
  private _env;

  constructor(){
    this._env = process.env;
  }

  private recLookup(obj, path) {
    try{
      let parts = path.split(".");
      if (parts.length == 1) {
        return obj[parts[0]];
      }
      return this.recLookup(obj[parts[0]], parts.slice(1).join("."));
    }
    catch (e){
      return undefined;
    }
  }

  getEnv(path?: string, defaultValue?: any): any {
    return this.get(this._env, path, defaultValue)
  }

  getAppEnv(path?: string, defaultValue?: any): any {
    if(path == undefined){
      path = '';
    }
    else{
      path = '.' + path;
    }
    return this.get(this._env, 'APP_ENV' + path, defaultValue);
  }

  private get(data:Object, path?:string, defaultValue?: any) : any {
    if (path === undefined) {
      return data;
    }

    let result = this.recLookup(this._env, path);
    if (result === undefined) {
      result = defaultValue;
    }
    return result;
  }
}
