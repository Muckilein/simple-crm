import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  //test@test.com
  hide:boolean=true;   
  public registerForm:FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', Validators.required)
 })
  public loading: boolean = false;
  constructor(private authService: AuthService) { }


  login() {
    this.authService.logIn(this.registerForm.value.email, this.registerForm.value.password).then(() => {
     console.log("succcesful login");    

    })
    .catch((error) => {
      console.log("login Fail");
    });
  
}

}
