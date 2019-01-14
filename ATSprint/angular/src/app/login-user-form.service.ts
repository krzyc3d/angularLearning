import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';
import { LoginComponent} from './login/login.component'
import { FormGroup } from '@angular/forms/src/model';


@Injectable({
  providedIn: 'root'
})
export class LoginUserFormService {
  loginComponent: LoginComponent;

  constructor() { }



getDataFromForm(): Observable<User>{
  return (this.loginComponent.loginForm.value);
}

}