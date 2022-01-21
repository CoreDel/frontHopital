import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/model/facture';
import { FactureService } from 'src/app/service/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {
  factures: any;
  facture: Facture=new Facture();
  constructor(private factureService:FactureService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.factureService.findAll().subscribe(data =>{this.factures = data});
  // subscribe : rafraichit la table
  }
  deleteFacture(idF:number){
    this.factureService.deleteFacture(idF).subscribe( () =>{this.findAll()} );
  }

  saveFacture(){
    this.factureService.saveFacture(this.facture).subscribe( () => {
      this.findAll(); // mettre à jour la table
      this.facture = new Facture(); // pour vider le formulaire
    })
  }
}
