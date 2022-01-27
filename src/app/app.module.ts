import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';


import { ConsultationComponent } from './pages/consultation/consultation.component';
import { RoleComponent } from './pages/role/role.component';
import { FactureComponent } from './pages/facture/facture.component';
import { HopitalComponent } from './pages/hopital/hopital.component';
import { ChambreComponent } from './pages/chambre/chambre.component';
import { MedicamentComponent } from './pages/medicament/medicament.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { DossiermedicalComponent } from './pages/dossiermedical/dossiermedical.component';
import { OrdonnanceComponent } from './pages/ordonnance/ordonnance.component';
import { AppService } from './app.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@Injectable()
export class XhrInterceptor implements HttpInterceptor {
intercept(req:HttpRequest<any>, next: HttpHandler){
  const xhr=req.clone({
    headers: req.headers.set('X-Requested-With','XMLHttpRequest')
  });
  return next.handle(xhr);
}
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,


    ConsultationComponent,
    RoleComponent,
    FactureComponent,
    HopitalComponent,
    ChambreComponent,
    MedicamentComponent,
    UtilisateurComponent,
    DossiermedicalComponent,
    OrdonnanceComponent,


  ],
  providers: [
    AppService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }