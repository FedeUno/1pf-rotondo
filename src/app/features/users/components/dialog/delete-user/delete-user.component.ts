import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/core/models/user';
import { UserState } from 'src/app/core/models/user.state';
import { UsersService } from 'src/app/services/users.service';
import { loadUsers } from '../../../state/user.actions';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
})
export class DeleteUserComponent {
  dataSource: any;

  constructor(
    private dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private usersService: UsersService,
    private store: Store<UserState>,
    private snackBar: MatSnackBar
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  deleteUser(user: User) {
    this.usersService.deleteUser(user).subscribe((user:User) => {
      this.dialogRef.close();
      this.store.dispatch(loadUsers());
      this.snackBar.open(`${user.username} was successfully removed`, 'Ok', {
        duration: 3000,
      });
    });
  }
}
