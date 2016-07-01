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


interface IService {
  post(donorProfile:DonorProfile):Observable<any>;
}
@Injectable()
export class DonorsService implements IService {
  static ENDPOINT: string = '/api/todos/:id';
  constructor(@Inject(Http) private _http: Http) { }

  post(donorProfile:DonorProfile):Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type","application/json");
    return this._http
               .post("/api/donor", JSON.stringify(donorProfile), {headers})
               .map((r) => r.json());
  }
}
