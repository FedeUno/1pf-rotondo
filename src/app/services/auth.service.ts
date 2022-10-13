import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, of } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/features/auth/state/auth.reducer';
import {
  selectActiveSessionState,
  selectUserAdminState,
} from '../features/auth/state/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api: string = environment.api;
  private _auth: User | undefined;
  activeSession$: Observable<boolean | undefined>;
  userAdmin$: Observable<boolean | undefined>;
  session: any;
  admin: any;

  


  constructor(private http: HttpClient, private store: Store<AuthState>) {
    this.activeSession$ = this.store.select(selectActiveSessionState);
    this.userAdmin$ = this.store.select(selectUserAdminState);
  }

  get auth(){
    return { ...this._auth! }
  } 


  login(user: string, password: string): Observable<User> {
    return this.http
      .get<User[]>(`${this.api}/users`)
      .pipe(
        map((users: User[]) => {
          return users.filter(
            (u: User) => u.username === user && u.password === password
          )[0];
        })
      )
      .pipe(
        tap((auth) => (this._auth = auth)),
        tap((auth) =>{if(auth != undefined) {localStorage.setItem('session', JSON.stringify(auth))}} ),
                
      );
  }
}
