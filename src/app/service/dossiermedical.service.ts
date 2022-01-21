import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dossiermedical } from '../model/dossiermedical';

@Injectable({
  providedIn: 'root'
})
export class DossiermedicalService {
  private baseURL = "http://localhost:9090/dossiermedical";

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(numeroSecu:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+ numeroSecu);
  }

  public deleteDM(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+ id);
  }

  public saveDM(dossier: Dossiermedical): Observable<any>{
    return this.httpClient.post(this.baseURL, dossier);
  }
  
  public updateDM(dossier: Dossiermedical, numeroSecu: number): Observable<any>{
    return this.httpClient.put(this.baseURL+"/"+numeroSecu, dossier);
  }
}

