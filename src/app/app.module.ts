import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
<<<<<<< HEAD
import { ConsultationComponent } from './pages/consultation/consultation.component';
=======
import { RoleComponent } from './pages/role/role.component';
import { FactureComponent } from './pages/facture/facture.component';
>>>>>>> cda258609f711f01c5b0355427a9d0a54d5e3bf3



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
<<<<<<< HEAD
    ConsultationComponent,
=======
    RoleComponent,
    FactureComponent,
>>>>>>> cda258609f711f01c5b0355427a9d0a54d5e3bf3

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
