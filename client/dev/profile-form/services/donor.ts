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
import {DonorProfile} from '../models/donor';

@Injectable()
export class DonorsService {
  constructor(@Inject(Http) private _http: Http) { }

  post(donorProfile:DonorProfile):Observable<string> {
    let headers = new Headers();
    headers.append("Content-Type","application/json");
    return this._http
               .post("/api/donor", JSON.stringify(donorProfile), {headers})
               .map(r => r.json());
  }
  get(id):Observable<DonorProfile> {
    let headers = new Headers();
    headers.append("Content-Type","application/json");
    return this._http
               .get("/api/donor/"+id, headers)
               .map(r => r.json());
  }
}
