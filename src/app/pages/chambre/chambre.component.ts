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


  constructor(private chambreService: ChambreService) { }

  ngOnInit(): void {
    /*this.numChambre='';
    this.findByNumChambre();*/
    this.findAll();
  }

  onSubmit() {
   this.findByNumChambre();
  }
  findAll(){
    this.chambreService.findAll().subscribe(data => {this.chambres =data})
  }
  deleteChambre(id: number) {
    this.chambreService.delete(id).subscribe(() => { this.findAll()})
  }
  saveChambre() {
    this.chambre.dispoChambre=true;
    this.chambreService.save(this.chambre).subscribe(() => {
      this.findAll(); // Mettre à jour la table
      this.chambre = new Chambre(); // pour vider le formulaire
    })
  }
  findByNumChambre() {
    var num:number=+this.numChambre;
    console.log("le numero="+ num);
    this.chambreService.findByNumChambre(num).subscribe(data => {this.chambres = data;console.log("je suis la liste"+this.chambres)});
  }
}
