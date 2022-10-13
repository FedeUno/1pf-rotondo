import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/core/models/user';
import { UserState } from 'src/app/core/models/user.state';
import { UsersService } from 'src/app/services/users.service';
import { selectorUserList } from '../../state/user.selectors';
import { EditUsersComponent } from '../dialog/edit-user/edit-user.component';
import { DeleteUserComponent } from '../dialog/delete-user/delete-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  
  users: User[] = [];
  
  users$!: Observable<User[]>;

  subscription!: Subscription;

  columns: string[] = ['avatar', 'username', 'password', 'admin', 'actions'];

  dataSource: MatTableDataSource<User>;

  @ViewChild(MatTable) table!: MatTable<User>;

  constructor(
    private store: Store<UserState>,
    private dialog: MatDialog,
    private usersService: UsersService,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.users$ = this.store.select(selectorUserList);

    this.users$.subscribe(
      (data) => (this.dataSource = new MatTableDataSource(data))
    );
  }

  openDialogEdit(user: User) {
    this.dialog.open(EditUsersComponent, {
      width: '300px',
      data: user,
    });
  }

  openDialogDelete(user: User) {
    this.dialog.open(DeleteUserComponent, {
      width: '300px',
      data: user,
    });
  }
}
