import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { UserState } from 'src/app/core/models/user.state';
import { UsersService } from 'src/app/services/users.service';
import { loadUsers } from '../../state/user.actions';




@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private store: Store<UserState>,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
      admin: new FormControl('', [Validators.required]),
    });
  }


  addUser() {
    const u: User = {
      id: '',
      username: this.form.value.username,
      password: this.form.value.password,
      avatar: this.form.value.avatar,
      admin: this.form.value.admin,
    };

    this.usersService.newUser(u).subscribe((u) => {
      this.store.dispatch(loadUsers());
      this.snackBar.open(`${u.username} was added successfully`, 'Ok', {
        duration: 3000,
      });
      this.router.navigate(['users']);
    });
  }

  toClose() {
    this.router.navigate(['users']);
  }
}
