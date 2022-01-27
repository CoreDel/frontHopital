import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;
  responseAll: any;
  isAdmin = false;
  isPatient = false;
  isMedecin = false;
  role: any;
  constructor(private httpClient: HttpClient) { }
  authenticate(credentials, callback) {
    const headers = new HttpHeaders(
      credentials ? {
        authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
      } : {}
    );
    this.httpClient.get('http://localhost:9090/login/user', { headers: headers }).subscribe(response => {
      this.responseAll = response;
      if (this.responseAll['username']) {
        this.authenticated = true;
        //localStorage.setItem("loggedUserId", this.responseAll['idUtilisateur']) 
        // Boucle for pour vérifier les rôles 
        for (let i = 0; i < this.responseAll['roles'].length; i++) {
          if (this.responseAll['roles'][i]['idRole'] == 1) {
            this.isAdmin = true;
          }
          if (this.responseAll['roles'][i]['idRole'] == 2) {
            this.isPatient = true;
          }
          if (this.responseAll['roles'][i]['idRole'] == 3) {
            this.isMedecin = true;
          }
        }
       
      }
    
      else {
        this.authenticated = false
      }
      console.log(this.authenticated);
    return callback && callback();
  });
}
}