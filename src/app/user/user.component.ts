import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, collection, doc, onSnapshot, addDoc, updateDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userListFire: any = [];
  onSnapp: any;

  firestore2: Firestore = inject(Firestore);
  constructor(public dialog: MatDialog) {
    this.onSnapp = this.subUserInfo();   
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed', result);
      // this.userOld = result;
      // this.userList.push(result);
    
    });
  } 

  subUserInfo() {
    let ref = this.gameRef();
    return onSnapshot(ref, (list) => {
      this.userListFire = [];
      list.forEach(elem => {       
        this.userListFire.push(elem.data());
      });
      console.log('gameData anzeigen', this.userListFire);
    });
  }

  gameRef() {
    return collection(this.firestore2, 'users');
  }
}
