import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private db: AngularFireAuth) { }

  login(email: string, password: string){

    return new Promise ((resolve, rejects) => {
      this.db.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejects(err));
    });
  }

  public logOut(){
    return new Promise ((resolve, rejects) => {
      this.db.signOut().then(user => {
        resolve(user);
      }).catch(err => rejects(err));
    });
  }

}
