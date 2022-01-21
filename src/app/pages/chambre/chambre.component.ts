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

  constructor(private chambreService: ChambreService) { }

  ngOnInit(): void {
  }
  findAll(){
    this.chambreService.findAll().subscribe(data => {this.chambre =data})
  }
  deleteChambre(id: number) {
    this.chambreService.delete(id).subscribe(() => { this.findAll()})
  }
  saveChambre() {
    this.chambreService.save(this.chambre).subscribe(() => {
      this.findAll(); // Mettre à jour la table
      this.chambre = new Chambre(); // pour vider le formulaire
    })
  }
}
