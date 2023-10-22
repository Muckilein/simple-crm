import { Component,  inject } from '@angular/core';
import { Firestore, doc,  updateDoc } from '@angular/fire/firestore';
import { MatDialogRef, } from '@angular/material/dialog';

import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  public user: User ;//= new User();
  public loading: boolean = false;
  public userId: string ;
  firestore: Firestore = inject(Firestore);
  birthDate: Date;
  unsubSingleUser: any;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {
   setTimeout(()=>{console.log("user id ",this.userId);},1000); 
  }

  getSingleRef(docId: string) {
    return doc(this.firestore, 'users', docId);
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
