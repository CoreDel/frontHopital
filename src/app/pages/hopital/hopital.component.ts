import { Component, OnInit } from '@angular/core';
import { Hopital } from 'src/app/model/hopital';
import { Medicament } from 'src/app/model/medicament';
import { Utilisateur } from 'src/app/model/utilisateur';
import { HopitalService } from 'src/app/service/hopital.service';

@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.scss']
})
export class HopitalComponent implements OnInit {
  hopitals: any;
  hopital: Hopital = new Hopital;
  nbChambre: number;
  nbMedecin: number;
  nbPatient: number;
  medecins: Utilisateur[];
  medicaments: Medicament[];

  constructor(private hopitalService: HopitalService) { }

  ngOnInit(): void {
    this.findAll()
    this.nombreDispoChambre();
    this.nombreMedecin();
    this.nombrePatient();
    this.listMedecin();
    this.listMedicament();
  }
  findAll(){
    this.hopitalService.findAll().subscribe(data => {this.hopital =data})
  }
  deleteHopital(id: number) {
    this.hopitalService.delete(id).subscribe(() => { this.findAll()})
  }
  saveHopital() {
    this.hopitalService.save(this.hopital).subscribe(() => {
      this.findAll(); // Mettre à jour la table
      this.hopital = new Hopital(); // pour vider le formulaire
    })
  }
  nombreDispoChambre() {
    this.hopitalService.nombreDispoChambre().subscribe( data => {this.nbChambre= data});
  }
  nombreMedecin(){
    this.hopitalService.nombreMedecin().subscribe(data =>{this.nbMedecin= data});
  }
  nombrePatient(){
    this.hopitalService.nombrePatient().subscribe(data =>{this.nbPatient= data});
  }
  listMedecin(){
    this.hopitalService.listMedecin().subscribe(data =>{this.medecins= data});
  }
  listMedicament(){
    this.hopitalService.listMedicament().subscribe(data =>{this.medicaments= data});
  }
}
