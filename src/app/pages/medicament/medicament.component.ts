import { Component, OnInit } from '@angular/core';
import { Medicament } from 'src/app/model/medicament';
import { MedicamentService } from 'src/app/service/medicament.service';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

  nomMedicament:string;
  medicaments: Medicament[];
  medicament: Medicament = new Medicament();

  constructor(private medicamentService:MedicamentService) { }

  ngOnInit(): void {
    this.findAll();
  }

  onSubmit() {
    this.findByNomMedicament();
  }

  findAll() {
    this.medicamentService.findAll().subscribe(data => {this.medicaments = data});
  }

  findByNomMedicament() {
    this.medicamentService.findByNomMedicament(this.nomMedicament).subscribe(data => {this.medicaments = data});
  }

  deleteMedicament(id:number) {
    this.medicamentService.delete(id).subscribe( () => {this.findAll()});
  }

  saveMedicament() {
    this.medicamentService.save(this.medicament).subscribe( () => {this.findAll(); this.medicament = new Medicament();});
  }

  updateMedicament(id:number) {
    this.medicamentService.update(id, this.medicament).subscribe( () => {this.findAll()});
  }
}
