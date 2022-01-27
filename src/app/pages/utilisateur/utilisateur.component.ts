import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs: any;
  utilisateur: Utilisateur = new Utilisateur();

  constructor(private utilisateurService: UtilisateurService, private appService: AppService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.utilisateurService.findAll().subscribe(data => { this.utilisateurs = data });
  }
  deleteUtilisateur(id: number) {
    this.utilisateurService.deleteUser(id).subscribe(() => { this.findAll() });
  }
  saveUtilisateur() {
    this.utilisateurService.saveUser(this.utilisateur).subscribe(() => {
      this.findAll();
      this.utilisateur = new Utilisateur()
    });
  }
  authenticated() {
    return this.appService.authenticated;
  }

  log() {
    if (this.appService.isAdmin == true && this.appService.isPatient == true && this.appService.isMedecin == true) {
      return true;
    }
    else {
      return false;
    }
  }
}
