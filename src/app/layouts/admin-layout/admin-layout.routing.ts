import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ChambreComponent } from 'src/app/pages/chambre/chambre.component';
import { HopitalComponent } from 'src/app/pages/hopital/hopital.component';
import { ConsultationComponent } from 'src/app/pages/consultation/consultation.component';
import { MedicamentComponent } from 'src/app/pages/medicament/medicament.component';
import { OrdonnanceComponent } from 'src/app/pages/ordonnance/ordonnance.component';
import { FactureComponent } from 'src/app/pages/facture/facture.component';
import { DossiermedicalComponent } from 'src/app/pages/dossiermedical/dossiermedical.component';
import { UtilisateurComponent } from 'src/app/pages/utilisateur/utilisateur.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'chambre',        component: ChambreComponent },
    { path: 'hopital',        component: HopitalComponent },
    { path: 'consultation',   component: ConsultationComponent },
    { path: 'medicament',     component: MedicamentComponent },
    { path: 'ordonnance',     component: OrdonnanceComponent },
    { path: 'facture',        component: FactureComponent },
    { path: 'dossiermedical', component: DossiermedicalComponent },
    { path: 'utilisateur',    component: UtilisateurComponent }
];
