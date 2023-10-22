import { Component, Inject, inject } from '@angular/core';
import { Firestore, doc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  firestore: Firestore = inject(Firestore);
  public user: User = new User();
  public loading: boolean = false;
  public birthDate: Date;
  userId: string = "";
  unsubSingleUser: any;


  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("the id is", data.id);
    this.userId = data.id;

    // this.subSingleGameInfo();
  }

  getSingleRef(docId: string) {
    return doc(this.firestore, 'users', docId);
  }

  // subSingleGameInfo() {
  //   console.log('fire', this.firestore);
  //   this.unsubSingleUser = onSnapshot(this.getSingleRef(this.userId), (element) => {
  //     this.user = new User(element.data());
  //   });
  // }

  async saveUser() {
    this.loading = true;
    if (this.birthDate) { this.user.birthDate = this.birthDate.getTime(); }
    let docRef = this.getSingleRef(this.userId)
    await updateDoc(docRef, this.user.toJSON()).catch(
      (err) => { console.log(err); });
    this.loading = false;
    this.dialogRef.close();
  }

}
