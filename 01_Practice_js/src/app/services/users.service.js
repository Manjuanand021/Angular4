import {
    Injectable
} from '@angular/core';
import {
    HttpClient,
    Response,
    HttpHeaders,
    HttpParams
} from '@angular/common/http';
import {
    Observable
} from 'rxjs/Observable';

@Injectable()
export default class UserService {
    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    registerUser(user) {
        // const customHeaders = new Headers({
        //     'Content-Type': 'application/json'
        // });
        // return this._http.post('https://reqres.in/api/register', user, {
        //     headers: customHeaders
        // }).map((res: Response) => {
        //     return res.json()
        // });
    }
    getListOfUsers() {
        const id = 2;
        return this._httpClient.get(`https://reqres.in/api/users/${id}`, {
            observe: 'body'
            // headers: new HttpHeaders().set('Content-Type', 'application/json')
            // params: new HttpParams().set('name', 'Manjuanand')
        }).map((res) => {
            // console.log(res);
            return res;
        }).catch((error) => {
            return Observable.throw(error);
        });
    }
};