import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  private baseURL="http://localhost:9090/medicaments"

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+ id);
  }

  public findByNomMedicament(nomMedicament:String):Observable<any> {
    return this.httpClient.get(this.baseURL+'/'+nomMedicament);
  }

  public update(id:number, medicament:any): Observable<any>{
    return this.httpClient.put(this.baseURL+"/"+id, medicament);
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public save(medicament:any): Observable<any> {
    return this.httpClient.post(this.baseURL, medicament);
  }
}
