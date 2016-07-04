import Location from '../models/locations';
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
}
