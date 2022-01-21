import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    private baseURL="http://localhost:9090/roles";

    constructor(private httpClient:HttpClient) { }

    // http://localhost:9090/roles
    public findAll() : Observable<any>{
      return this.httpClient.get(this.baseURL);
    }

    // http://localhost:9090/roles/{idRole}
    public findOne(idRole:number) : Observable<any>{
      return this.httpClient.get(this.baseURL+"/"+idRole);
    }

    public findByIdRoleAndLibelle(idRole:number, libelle:string) : Observable<any>{
      return this.httpClient.get(this.baseURL+"/"+idRole+"/"+libelle);
    }  

    // http://localhost:9090/roles
    public saveRole(role:any): Observable<any>{
      return this.httpClient.post(this.baseURL, role);
    }
    
    // http://localhost:9090/roles/{idRole}
    public updateRole(idRole:number, role:any): Observable<any>{
        return this.httpClient.put(this.baseURL+"/"+idRole, role);
    }

    // http://localhost:9090/roles/{idRole}
    public deleteRole(idRole:number): Observable<any>{
    console.log("identifiant niveau service:"+idRole);
      return this.httpClient.delete(this.baseURL+"/"+idRole);
    }

} 