import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, doc, onSnapshot, addDoc, updateDoc } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  public userId:string;
  firestore: Firestore = inject(Firestore); 
  unsubSingleUser:any;

public user:User = new User();
  constructor(private route: ActivatedRoute,public dialog: MatDialog){

    this.route.params.subscribe((params) => { this.userId = params['id'];});
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

  editUserAddress(){
 // const dialogRef = this.dialog.open();

    // dialogRef.afterClosed().subscribe(result => {
    //   // console.log('The dialog was closed', result);
    //   // this.userOld = result;
    //   // this.userList.push(result);
    
    // });
  }

  editUserDetail(){}

  
}