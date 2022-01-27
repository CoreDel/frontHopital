import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  
  private baseURL="http://localhost:9090/consultations";
  
  constructor(private httpClient:HttpClient) { }

  //findAll
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  //findOne
  public findOne(id:number) : Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  //findBy
  public findByidPatientAndDate(idPatient:number, Date:number) : Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+idPatient+"/"+Date);
  }

  //save
  public saveConsultation(consultation:any): Observable<any>{
    return this.httpClient.post(this.baseURL, consultation);
  }
  
  //update
  public updateConsultation(idc:number, consultation:any): Observable<any>{
    return this.httpClient.put(this.baseURL+"/"+idc, consultation);
  }

  //delete
  public deleteConsultation(idc:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+idc);
  }
}
