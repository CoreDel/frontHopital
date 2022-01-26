import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/hopital', title: 'Hopital',  icon: 'ni-building text-success', class: '' },
    { path: '/chambre', title: 'Chambres',  icon:'ni-fat-add text-success', class: '' },
    { path: '/consultation', title: 'Consultations',  icon:'ni-ambulance text-success', class: '' },
    { path: '/ordonnance', title: 'Ordonnance',  icon:'ni-folder-17 text-success', class: '' },
    { path: '/facture', title: 'Factures',  icon:'ni-credit-card text-success', class: '' },
    { path: '/role', title: 'Roles',  icon:'ni-key-25 text-success', class: '' },
    { path: '/dossiermedical', title: 'Dossier medical',  icon:'ni-collection text-success', class: '' },

    { path: '/medicament', title: 'Médicaments',  icon:'ni-shop text-success', class: '' },
    { path: '/utilisateur', title: 'Utilisateurs',  icon:'ni-circle-08 text-success', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
