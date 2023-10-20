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
  onSnapp: any;

  firestore: Firestore = inject(Firestore);
 
 
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
    
    console.log("print firestore", this.firestore);
    console.log("gameref", this.gameRef());
    // this.onSnapp = this.subUserInfo();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.addUser();
    setTimeout(() => {
      this.loading = false; this.dialogRef.close();
    }, 1000);


  }


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration


  gameRef() {
    return collection(this.firestore, 'users');
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

    //  await this.updateGame(this.idUser);
  }
  subUserInfo() {
    let ref = this.gameRef();
    return onSnapshot(ref, (list) => {
      list.forEach(elem => {
        console.log('gameData anzeigen', elem);
      });

    });
  }


  // subSingleGameInfo() {
  //   console.log('fire', this.firestore);
  //   this.unsubSingleUser = onSnapshot(this.getSingleRef(this.idUser), (element) => {
  //     //erst mal nix   
  //   });
  // }


  async updateGame(id: string) {
    let docRef = this.getSingleRef(id)
    await updateDoc(docRef, this.user.toJSON()).catch(
      (err) => { console.log(err); });
  }
  getSingleRef(docId: string) {
    return doc(this.firestore, 'users', docId);
  }
}

