import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Http,
  Headers
} from '@angular/http';

import 'rxjs/add/operator/map';
import Location from '../../positionning/models/locations';

@Injectable()
export class LocationService  {
  constructor(@Inject(Http) private _http:Http){}

  setLocation(location:Location):Observable<string> {
    let headers = new Headers();
    headers.append("Content-Type","application/json");
    return this._http
               .post("/api/positions", JSON.stringify(location), {headers})
               .map(r =>  r.json());
  }
  getLocations(min?:any, max?:any):Observable<Array<Location>> {
    let headers = new Headers();
    headers.append("Content-Type","application/json");
    return this._http
               .get("/api/positions", {headers})
               .map(r =>  r.json());
  }

}
