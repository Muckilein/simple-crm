import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { getFirestore,Firestore, collection, doc, onSnapshot, addDoc, updateDoc } from '@angular/fire/firestore';
import { FirebaseApp, initializeApp } from '@angular/fire/app';
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
  firestore: Firestore = inject(Firestore);
  // app = initializeApp(firebaseConfig);
  // db = getFirestore(this.app);

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { 
    // const app = initializeApp(firebaseConfig);
    // const db = getFirestore(app);
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser() {

    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.addUser();

  }


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


  gameRef() {
    // return collection(this.firestore, 'users');
  }

  makeJSONwithID(item: {}, id: string) {
    return { 'user': item, 'userID': id };
  }


  async addUser() {
    // await addDoc(this.gameRef(), this.user.toJSON()).catch(
    //   (err) => { console.error(err) }).then(
    //     (docRef) => {
    //       if (docRef) {
    //         this.idUser = docRef.id;
    //       }
    //     });
    this.updateGame(this.idUser);
  }

  subSingleGameInfo() {
    // console.log('fire', this.firestore);
    // this.unsubSingleUser = onSnapshot(this.getSingleRef(this.idUser), (element) => {
    //   //erst mal nix   
    // });
  }


  async updateGame(id: string) {
    // let docRef = this.getSingleRef(id)
    // await updateDoc(docRef, this.user.toJSON()).catch(
    //   (err) => { console.log(err); });
  }
  getSingleRef(docId: string) {
    // return doc(this.firestore, 'users', docId);
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyCa_wSwv8c0yFpHhCnAR-Q_Ep9Dk62VNp4",
  authDomain: "simple-crm-21ca2.firebaseapp.com",
  projectId: "simple-crm-21ca2",
  storageBucket: "simple-crm-21ca2.appspot.com",
  messagingSenderId: "969469252686",
  appId: "1:969469252686:web:1c506f720d2bc9f62a9f1f"
};

// Initialize Firebase

