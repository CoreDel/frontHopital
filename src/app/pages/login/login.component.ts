import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { 
  credentials = {username: '', password: ''}
  constructor(private appService:AppService, private httpClient: HttpClient,private router:Router){}
  login(){
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("http://localhost:4200/#")});
    return false;
  }
}
