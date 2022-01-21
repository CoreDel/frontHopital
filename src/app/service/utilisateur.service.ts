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

  public findOne(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+ id);
  }

  public findByNom(nom:string): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+ nom);
  }

  public findByUsername(username:string): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+ username);
  }

  public deleteUser(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+ id);
  }

  public saveUser(utilisateur: Utilisateur): Observable<any>{
    return this.httpClient.post(this.baseURL, utilisateur);
  }
  
  public updateUser(utilisateur: Utilisateur, id: number): Observable<any>{
    return this.httpClient.put(this.baseURL+"/"+id, utilisateur);
  }
}
