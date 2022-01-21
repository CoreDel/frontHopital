import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {

  private baseURL="http://localhost:9090/ordonnances"

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+ id);
  }

  public update(id:number, ordonnance:any): Observable<any>{
    return this.httpClient.put(this.baseURL+"/"+id, ordonnance);
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public save(ordonnance:any): Observable<any> {
    return this.httpClient.post(this.baseURL, ordonnance);
  }
}
