import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL = "http://localhost:9090/utilisateurs";

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(): Observable<any>{
    return this.httpClient.get(this.baseURL+"/");
  }

}
