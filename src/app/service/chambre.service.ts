import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from '../model/chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private baseURL="http://localhost:9090/chambres"

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public save(chambre:any): Observable<any> {
    return this.httpClient.post(this.baseURL, chambre);
  }
  public updateChambre(idC:number, chambre:any): Observable<any>{
    return this.httpClient.put(this.baseURL+"/"+idC, Chambre);
  }
}
