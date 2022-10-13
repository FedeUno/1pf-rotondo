import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/core/models/user.state';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/services/users.service';
import { loadUsers } from '../../../state/user.actions';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUsersComponent {
  
  form: FormGroup;
  
  constructor(

    @Inject(MAT_DIALOG_DATA) public data: User,
    private usersService: UsersService,
    private dialogRef: MatDialogRef<EditUsersComponent>,
    private store: Store<UserState>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar   
   
  ) {
    this.form = this.fb.group({
      username: new FormControl(data.username, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      password: new FormControl(data.password, [Validators.required]),
      avatar: new FormControl(data.avatar, [Validators.required]),
      admin: new FormControl(data.admin, [Validators.required]),
    }); 
  }

  toUpdate() {
    const u: User = {
      id: this.data.id,
      username: this.form.value.username,
      password: this.form.value.password,
      avatar: this.form.value.avatar,
      admin: this.form.value.admin,
    };

    this.usersService.modifyUser(u).subscribe((user)=>{
      this.store.dispatch(loadUsers());
      this.snackBar.open(`${user.username} was edited correctly`, 'Ok', {duration:3000})
    })
    this.dialogRef.close(u);    
  }

  toClose() {
    this.dialogRef.close();
  }
}
