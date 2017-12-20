import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HobbiesService {
  constructor(private _http: Http) {}

  getAllHobbies(): Observable<any> {
    return this._http.get("../data/db.json").pipe(
      map((res: Response) => {
        return res.json().hobbies;
      }),
      catchError(error => Observable.throw(error.json()))
    );
  }
}
