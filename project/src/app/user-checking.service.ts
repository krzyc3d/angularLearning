import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class UserCheckingService {

  constructor(private http: HttpClient) { }

  getUsersDetails():Observable<any[]>{
    return this.http.get('./app/user/user.json').pipe(map((resp:Response)=> {return resp}));
  }
}
