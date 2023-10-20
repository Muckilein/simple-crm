import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent { 
userList:any = [];
users:any=[{
  "firstName" :  "Julia" ,
  "lastName" :   "Wesimir" ,
  "birthDate" :   1111111111111 ,
  "street" :   "Kolberger Alee" ,
  "zipCoode" :   "340592" ,
  "city" :   "Birkentahl" 
  },{
    "firstName" :  "Stefanie" ,
    "lastName" :   "Wesimir" ,
    "birthDate" :   3345647567 ,
    "street" :   "Kolberger Alee" ,
    "zipCoode" :   "340592" ,
    "city" :   "Birkentahl" 
    }];
constructor(public dialog: MatDialog) {
      this.userList.push(new User(this.users[0]));  
      this.userList.push(new User(this.users[1]));
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed', result);
      // this.userOld = result;
      // this.userList.push(result);
      console.log("all Users",this.userList);
    });
  }
}
