import { Component } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent {  
  //test@test.com
  hide:boolean=true;   
  public registerForm:FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', Validators.required)
 })
  public loading: boolean = false;
  constructor(private authService: AuthService) { }

  register() {
    // this.authService.signUp(this.email, this.password).then(() => {
      this.authService.signUp(this.registerForm.value.email, this.registerForm.value.password).then(() => {   

    })
    .catch((error) => {
     
    })  
}
}
