import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import {Firestore, collection, doc, onSnapshot, addDoc, updateDoc } from '@angular/fire/firestore';



export interface DialogData {
}

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],

})

export class DialogAddUserComponent {

  user = new User();
  birthDate: Date;
  idUser: string;
  unsubSingleUser: any;
  loading = false;
  

  firestore: Firestore = inject(Firestore); 
 
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
    
    console.log("print firestore", this.firestore);
    console.log("gameref", this.gameRef());
  
  }

  gameRef() {
    return collection(this.firestore, 'users');
  }
 
  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    await this.addUser();
    this.loading = false; this.dialogRef.close()
   
  } 

  makeJSONwithID(item: {}, id: string) {
    return { 'user': item, 'userID': id };
  }


  async addUser() {
    await addDoc(this.gameRef(), this.user.toJSON()).catch(
      (err) => { console.error(err) }).then(
        (docRef) => {
          if (docRef) {
            this.idUser = docRef.id;
          }
        });

     await this.updateGame(this.idUser);
  }

  async updateGame(id: string) {
    let docRef = this.getSingleRef(id)
    await updateDoc(docRef, {"userId":id}).catch(
      (err) => { console.log(err); });
  }
  getSingleRef(docId: string) {
    return doc(this.firestore, 'users', docId);
  }  
  
}

