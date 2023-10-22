import { Component, Inject, inject } from '@angular/core';
import { Firestore, doc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  public user: User = new User();
  public loading: boolean = false;
  userId: string = "";
  firestore: Firestore = inject(Firestore);
  birthDate: Date;
  unsubSingleUser: any;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("the id is", data.id);
    this.userId = data.id;
    this.subSingleGameInfo();
  }

  getSingleRef(docId: string) {
    return doc(this.firestore, 'users', docId);
  }

  subSingleGameInfo() {
    console.log('fire', this.firestore);
    this.unsubSingleUser = onSnapshot(this.getSingleRef(this.userId), (element) => {
      this.user = new User(element.data());
    });
  }

  async saveUser() {
    this.loading = true;
    let docRef = this.getSingleRef(this.userId)
    await updateDoc(docRef, this.user.toJSON()).catch(
      (err) => { console.log(err); });
    this.loading = false;
    this.dialogRef.close();
  }

}
