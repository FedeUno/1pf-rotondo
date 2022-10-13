import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../services/auth.service';
import { loadSession } from '../../state/auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form!: FormGroup;

  isLoginFailed = false;
  roles: string[] = [];
  errorMessage = '';

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {
    this.form = fb.group({
      user: new FormControl('Jonathan', [Validators.required]),
      password: new FormControl('FpaKm2xqq4XSkeA', [Validators.required]),
    });  

   }



  login() {
    this.authService
      .login(this.form.value.user, this.form.value.password)
      .subscribe((user: User) => {
          this.store.dispatch(
          loadSession({
            activeUser: user,
          })
        );   
        if (user) {
          this.router.navigate(['/']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Authentication error',
            confirmButtonColor: '#0D47A1',
          });
        }
      });
  }
}

