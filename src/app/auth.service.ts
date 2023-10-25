import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  Router,  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 constructor(private afAuth: AngularFireAuth, private route:Router) { }
 async signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("suggcessful register");

      })
      .catch((error) => {
        console.log("register fail");
      });
  }

  async logIn(email: string, password: string) {
   return  this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        // Login successful
        this.route.navigateByUrl("/user");
      })
      .catch((error) => {
        // An error occurred
      });
  }
}