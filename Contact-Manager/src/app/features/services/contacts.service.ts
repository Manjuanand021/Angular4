import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ContactsService {
  constructor(private _http: Http) {}

  getAllContacts(): Observable<any> {
    return this._http
      .get("./assets/data/db.json")
      .pipe(
        map((res: Response) => res.json().contacts),
        catchError(error => Observable.throw(error.json()))
      );
  }
}
