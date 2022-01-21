import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ChambreComponent } from 'src/app/pages/chambre/chambre.component';
import { HopitalComponent } from 'src/app/pages/hopital/hopital.component';
import { ConsultationComponent } from 'src/app/pages/consultation/consultation.component';
import { Dossiermedical } from 'src/app/model/dossiermedical';
import { MedicamentComponent } from 'src/app/pages/medicament/medicament.component';
import { OrdonnanceComponent } from 'src/app/pages/ordonnance/ordonnance.component';
import { RoleComponent } from 'src/app/pages/role/role.component';
import { FactureComponent } from 'src/app/pages/facture/facture.component';
import { DossiermedicalComponent } from 'src/app/pages/dossiermedical/dossiermedical.component';
import { UtilisateurComponent } from 'src/app/pages/utilisateur/utilisateur.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'chambre',        component: ChambreComponent },
    { path: 'hopital',        component: HopitalComponent },
    { path: 'consultation',   component: ConsultationComponent },
    { path: 'medicament',     component: MedicamentComponent },
    { path: 'ordonnance',     component: OrdonnanceComponent },
    { path: 'role',           component: RoleComponent },
    { path: 'facture',        component: FactureComponent },
    { path: 'dossiermedical', component: DossiermedicalComponent },
    { path: 'utilisateur',    component: UtilisateurComponent }
];
