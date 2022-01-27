import { Component, OnInit } from '@angular/core';
import { Chambre } from 'src/app/model/chambre';
import { ChambreService } from 'src/app/service/chambre.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit {

  chambres: any;
  chambre: Chambre= new Chambre;
  numChambre: string;
  chambreExtra : Chambre[];
  disponibilite : string ="disponible";


  constructor(private chambreService: ChambreService) { }

  ngOnInit(): void {
    this.findAll();
  }

  onSubmit() {
   this.findByNumChambre();
  }
  onSubmitDispo(){
    this.findByDispoChambre();
  }
  findAll(){
    this.chambreService.findAll().subscribe(data => {this.chambres =data})
  }
  deleteChambre(id: number) {
    this.chambreService.deleteChambre(id).subscribe(() => { this.findAll()})
  }
  saveChambre() {
    this.chambre.dispoChambre="disponible";
    this.chambreService.saveChambre(this.chambre).subscribe(() => {
      this.findAll(); // Mettre à jour la table
      this.chambre = new Chambre(); // pour vider le formulaire
    })
  }
  findByNumChambre() {
    var num:number=+this.numChambre;
    console.log("le numero="+ num);
    this.chambreService.findByNumChambre(num).subscribe(data => {this.chambres = data;console.log("je suis la liste"+this.chambres)});
  }

  findByDispoChambre(){
    this.chambreService.findByDispoChambre(this.disponibilite).subscribe(data => {this.chambres = data;});
  }

  updateChambre(id:number) {
    this.chambreService.updateChambre(id, this.chambre).subscribe( () => {this.findAll()});
  }
}
