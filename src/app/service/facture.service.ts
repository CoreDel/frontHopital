import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../model/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private baseURL="http://localhost:9090/factures";
  
  constructor(private httpClient:HttpClient) { }

  //findAll
  public findALl() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  //findOne
  public findOne(idF:number) : Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+idF);
  }

  //findBy
  public findByPrixAndType(prix:number, type:string) : Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+prix+"/"+type);
  }

  //save
  public saveFacture(facture:any): Observable<any>{
    return this.httpClient.post(this.baseURL, facture);
  }

  //update
  public updateFacture(idF:number, facture:any): Observable<any>{
    return this.httpClient.put(this.baseURL+"/"+idF, facture);
  }

  //delete
  public deleteFacture(idF:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+idF);
  }

}
